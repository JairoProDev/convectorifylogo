const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\jairo\\OneDrive\\Desktop\\convectorifylogo\\a\\vectorify logo.svg', 'utf8');

const match = content.match(/d="([^"]+)"/);
if (!match) {
    console.log("No path found");
    process.exit(1);
}

const pathStr = match[1];
const points = [];
const tokens = pathStr.replace(/\n/g, ' ').split(/\s+/).filter(x => x.trim().length > 0);

let i = 0;
while (i < tokens.length) {
    const cmd = tokens[i].toUpperCase();
    if (cmd === 'M' || cmd === 'L') {
        const x = parseFloat(tokens[i+1]);
        const y = parseFloat(tokens[i+2]);
        points.push([x, y]);
        i += 3;
    } else if (cmd === 'C') {
        const x = parseFloat(tokens[i+5]);
        const y = parseFloat(tokens[i+6]);
        points.push([x, y]);
        i += 7;
    } else if (cmd === 'Z') {
        i += 1;
    } else {
        i += 1;
    }
}

const distance = (p1, p2) => Math.hypot(p1[0]-p2[0], p1[1]-p2[1]);

console.log("Total points:", points.length);

console.log("Min Y:", points.reduce((a, b) => a[1] < b[1] ? a : b));
console.log("Max Y:", points.reduce((a, b) => a[1] > b[1] ? a : b));
console.log("Min X:", points.reduce((a, b) => a[0] < b[0] ? a : b));
console.log("Max X:", points.reduce((a, b) => a[0] > b[0] ? a : b));

const simplified = [points[0]];
for (let i = 1; i < points.length; i++) {
    if (distance(simplified[simplified.length-1], points[i]) > 80) {
        simplified.push(points[i]);
    }
}

console.log("Simplified", simplified.length);
for (const p of simplified) {
    console.log(`  [${p[0].toFixed(1)}, ${p[1].toFixed(1)}]`);
}
