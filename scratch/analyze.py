import xml.etree.ElementTree as ET
import re

svg_content = open("c:\\Users\\jairo\\OneDrive\\Desktop\\convectorifylogo\\a\\vectorify logo.svg").read()
path_d = re.search(r'd="([^"]+)"', svg_content).group(1)

# Extract only the explicit coordinates (endpoints of C or L commands)
points = []
tokens = path_d.replace('\n', ' ').split()
i = 0
while i < len(tokens):
    cmd = tokens[i]
    if cmd in ['M', 'L']:
        x, y = float(tokens[i+1]), float(tokens[i+2])
        points.append((x, y))
        i += 3
    elif cmd == 'C':
        # The 3rd coordinate pair in C is the endpoint
        x, y = float(tokens[i+5]), float(tokens[i+6])
        points.append((x, y))
        i += 7
    elif cmd == 'Z':
        i += 1
    else:
        i+=1

import math
def distance(p1, p2):
    return math.hypot(p1[0]-p2[0], p1[1]-p2[1])

# find the "sharp" corners by comparing angle changes and large jumps...
# Actually, since it's an auto-traced path, let's just find the convex hull or the extreme points.
import json
print("Num points:", len(points))
min_y = min(points, key=lambda p: p[1])
max_y = max(points, key=lambda p: p[1])
min_x = min(points, key=lambda p: p[0])
max_x = max(points, key=lambda p: p[0])

print("Top:", min_y)
print("Bottom:", max_y)
print("Left:", min_x)
print("Right:", max_x)

# Print a simplified trace of points (e.g. skip points that are very close together)
simplified = [points[0]]
for p in points[1:]:
    if distance(simplified[-1], p) > 50: # distance threshold
        simplified.append(p)

print("Simplified points:", len(simplified))
for p in simplified:
    print(f"  {p[0]:.1f}, {p[1]:.1f}")
