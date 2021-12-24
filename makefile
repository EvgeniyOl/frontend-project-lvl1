install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
even-games:
	node bin/games/brain-even.js
calc-games:
	node bin/games/brain-calc.js
gcd-games:
	node bin/games/brain-gcd.js
progression-games:
	node bin/games/brain-progression.js
prime-games:
	node bin/games/brain-prime.js