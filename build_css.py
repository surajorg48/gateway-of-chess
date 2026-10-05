import os
import shutil

files = [
    'src/styles/variables.css',
    'src/styles/base.css',
    'src/styles/components.css',
    'src/styles/sections.css',
    'src/styles/pages.css'
]

font_import = "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');\n\n"

parts = [font_import]
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    cleaned = '\n'.join([line for line in content.splitlines() if not line.strip().startswith('@import')])
    header = f"/* ==================================================\n   {os.path.basename(f).upper()}\n   ================================================== */\n"
    parts.append(header + cleaned + '\n\n')

full_css = ''.join(parts)
os.makedirs('assets/css', exist_ok=True)

with open('assets/css/style.css', 'w', encoding='utf-8') as out:
    out.write(full_css)

print(f"Generated assets/css/style.css: {len(full_css)} bytes")
