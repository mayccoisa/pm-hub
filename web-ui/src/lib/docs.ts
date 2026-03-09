import fs from 'fs';
import path from 'path';

const DOCS_PATH = path.join(process.cwd(), '..', 'docs');

export interface DocNode {
  name: string;
  path: string;
  isDir: boolean;
  children?: DocNode[];
}

export function getDocTree(dir: string = ''): DocNode[] {
  const fullPath = path.join(DOCS_PATH, dir);
  if (!fs.existsSync(fullPath)) return [];

  const items = fs.readdirSync(fullPath, { withFileTypes: true });
  
  return items
    .filter(item => !item.name.startsWith('.'))
    .map(item => {
      const relativePath = path.join(dir, item.name).replace(/\\/g, '/');
      const node: DocNode = {
        name: item.name,
        path: relativePath,
        isDir: item.isDirectory(),
      };

      if (node.isDir) {
        node.children = getDocTree(relativePath);
      }

      return node;
    })
    .sort((a, b) => {
      if (a.isDir && !b.isDir) return -1;
      if (!a.isDir && b.isDir) return 1;
      return a.name.localeCompare(b.name);
    });
}

export function getDocContent(slug: string[]) {
  const filePath = path.join(DOCS_PATH, ...slug);
  const fullPath = filePath.endsWith('.md') ? filePath : `${filePath}.md`;

  if (!fs.existsSync(fullPath)) return null;

  return fs.readFileSync(fullPath, 'utf8');
}
