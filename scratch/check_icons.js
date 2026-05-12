
import fs from 'fs';
import path from 'path';

const dir = './app';

function checkDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    files.forEach(file => {
        const filePath = path.join(currentDir, file);
        if (fs.statSync(filePath).isDirectory()) {
            checkDir(filePath);
        } else if (file.endsWith('.tsx')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const importMatch = content.match(/import\s*{([^}]+)}\s*from\s*["']lucide-react["']/);
            if (importMatch) {
                const imports = importMatch[1].split(',').map(i => i.trim().split(/\s+as\s+/)[0]).filter(i => i);
                const tags = content.match(/<([A-Z][a-zA-Z0-9]*)/g) || [];
                const tagNames = tags.map(t => t.substring(1));
                
                imports.forEach(imp => {
                    if (!tagNames.includes(imp) && !content.includes(imp + '.') && !content.includes(': ' + imp) && !content.includes('icon: ' + imp)) {
                        // console.log(`Possibly unused import: ${imp} in ${filePath}`);
                    }
                });

                tagNames.forEach(tag => {
                    // Check if tag is from lucide-react (this is naive but helpful)
                    // Common non-icon tags
                    if (['motion', 'AnimatePresence', 'Link', 'Image', 'Navbar', 'Storytelling', 'ShowcaseGrid', 'CTA', 'CinematicLoader', 'Providers', 'AppSidebar', 'Topbar', 'Providers'].includes(tag)) return;
                    
                    if (!imports.includes(tag) && !content.includes(`const ${tag}`) && !content.includes(`function ${tag}`) && !content.includes(`import ${tag}`)) {
                        console.log(`MISSING IMPORT: ${tag} in ${filePath}`);
                    }
                });
            }
        }
    });
}

checkDir(dir);
