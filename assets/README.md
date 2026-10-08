# Prince materials

`prince-materials.png` is the original atlas generated with the built-in imagegen tool. `prince-materials.webp` is the optimized 768×768 runtime asset. Keep the `assets` folder alongside `index.html` when hosting the game.

Quadrants: top left blue brocade, top right ivory linen, bottom left brown leather, bottom right blue steel. The canvas renderer clips each material to the prince's animated body parts, blending it over their existing shading. Guards keep their original materials. Loading failure leaves the original drawing intact.

## Generation prompt

Use case: stylized-concept. Asset type: game material texture atlas, square image with exactly 2 columns and 2 rows of equal sized square swatches, filling the canvas without gaps or borders. Top left quadrant: rich muted midnight teal blue woven brocade fabric, subtle Persian geometric weave, small tonal diamond motifs, restrained antique gold thread accents, broad soft vertical folds. Top right quadrant: warm ivory heavy linen, fine woven fibers and soft narrow vertical creases, lightly worn. Bottom left quadrant: dark warm chestnut brown aged leather, fine grain, scuffs, subtle broad vertical highlights, no seams or objects. Bottom right quadrant: blue steel armor surface, brushed grain, small fine scratches and subtle hammered metal detail, desaturated slate blue. Hand-painted high-quality 2D adventure game materials, softly directional illumination from upper left, readable medium-scale texture variation. Flat orthographic surface samples, no perspective, no sphere, no characters, no clothing shapes, no text, no labels, no frames, no gaps. Precise quadrant boundaries at 50 percent width and height. Each material fully fills its entire quadrant. Avoid extreme contrast or photographic noise.
