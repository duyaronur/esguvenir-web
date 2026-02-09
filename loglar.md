2026-Feb-09 10:07:28.569008 Starting deployment of duyaronur/esguvenir-web:main to localhost.
2026-Feb-09 10:07:30.337545 Preparing container with helper image: ghcr.io/coollabsio/coolify-helper:1.0.12
2026-Feb-09 10:07:31.283578 [DEBUG] [CMD]: docker stop -t 30 sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:07:31.283578 [DEBUG] Error response from daemon: No such container: sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:07:32.334694 [DEBUG] [CMD]: docker run -d --network coolify --name sw8o04g48g80wo4k8cw0okcw  --rm -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/coollabsio/coolify-helper:1.0.12
2026-Feb-09 10:07:32.334694 [DEBUG] 411f5f9becf524cd3f1f8e39df1239994d24e5cd088ee6509d04b525dc6b96f5
2026-Feb-09 10:07:39.556679 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'GIT_SSH_COMMAND="ssh -o ConnectTimeout=30 -p 22 -o Port=22 -o LogLevel=ERROR -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" git ls-remote https://x-access-token:<REDACTED>@github.com/duyaronur/esguvenir-web.git refs/heads/main'
2026-Feb-09 10:07:39.556679 [DEBUG] b0892a9674ae2c3d669849ae11c925702a1b796f	refs/heads/main
2026-Feb-09 10:07:40.749524 Image not found (scwc8ogkwo084s4okw0kgooc:b0892a9674ae2c3d669849ae11c925702a1b796f). Building new image.
2026-Feb-09 10:07:41.265310 ----------------------------------------
2026-Feb-09 10:07:41.296516 Importing duyaronur/esguvenir-web:main (commit sha b0892a9674ae2c3d669849ae11c925702a1b796f) to /artifacts/sw8o04g48g80wo4k8cw0okcw.
2026-Feb-09 10:07:42.468089 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'git clone --depth=1 --recurse-submodules --shallow-submodules -b 'main' 'https://x-access-token:<REDACTED>@github.com/duyaronur/esguvenir-web.git' '/artifacts/sw8o04g48g80wo4k8cw0okcw' && cd '/artifacts/sw8o04g48g80wo4k8cw0okcw' && if [ -f .gitmodules ]; then git submodule sync && GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" git submodule update --init --recursive --depth=1; fi && cd '/artifacts/sw8o04g48g80wo4k8cw0okcw' && GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" git lfs pull'
2026-Feb-09 10:07:42.468089 [DEBUG] Cloning into '/artifacts/sw8o04g48g80wo4k8cw0okcw'...
2026-Feb-09 10:07:48.623594 [DEBUG] Updating files:  45% (41/91)
2026-Feb-09 10:07:48.654959 [DEBUG] Updating files:  46% (42/91)
2026-Feb-09 10:07:48.671170 [DEBUG] Updating files:  47% (43/91)
2026-Feb-09 10:07:48.677161 [DEBUG] Updating files:  48% (44/91)
Updating files:  49% (45/91)
Updating files:  50% (46/91)
Updating files:  51% (47/91)
Updating files:  52% (48/91)
Updating files:  53% (49/91)
Updating files:  54% (50/91)
2026-Feb-09 10:07:48.685020 [DEBUG] Updating files:  56% (51/91)
Updating files:  57% (52/91)
Updating files:  58% (53/91)
Updating files:  59% (54/91)
Updating files:  60% (55/91)
Updating files:  61% (56/91)
Updating files:  62% (57/91)
Updating files:  63% (58/91)
Updating files:  64% (59/91)
Updating files:  65% (60/91)
2026-Feb-09 10:07:48.690619 [DEBUG] Updating files:  67% (61/91)
Updating files:  68% (62/91)
Updating files:  69% (63/91)
Updating files:  70% (64/91)
Updating files:  71% (65/91)
Updating files:  72% (66/91)
Updating files:  73% (67/91)
Updating files:  74% (68/91)
2026-Feb-09 10:07:48.697508 [DEBUG] Updating files:  75% (69/91)
Updating files:  76% (70/91)
Updating files:  78% (71/91)
Updating files:  79% (72/91)
Updating files:  80% (73/91)
Updating files:  81% (74/91)
Updating files:  82% (75/91)
Updating files:  83% (76/91)
Updating files:  84% (77/91)
Updating files:  85% (78/91)
Updating files:  86% (79/91)
Updating files:  87% (80/91)
Updating files:  89% (81/91)
Updating files:  90% (82/91)
Updating files:  91% (83/91)
Updating files:  92% (84/91)
Updating files:  93% (85/91)
Updating files:  94% (86/91)
Updating files:  95% (87/91)
Updating files:  96% (88/91)
Updating files:  97% (89/91)
2026-Feb-09 10:07:48.705074 [DEBUG] Updating files:  98% (90/91)
Updating files: 100% (91/91)
Updating files: 100% (91/91), done.
2026-Feb-09 10:07:53.085691 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'cd /artifacts/sw8o04g48g80wo4k8cw0okcw && git log -1 b0892a9674ae2c3d669849ae11c925702a1b796f --pretty=%B'
2026-Feb-09 10:07:53.085691 [DEBUG] fix: resolve deployment errors and update dependencies
2026-Feb-09 10:07:53.085691 [DEBUG] 
2026-Feb-09 10:07:53.085691 [DEBUG] - Update Next.js from 14.2.35 to 16.1.6 for security fixes
2026-Feb-09 10:07:53.085691 [DEBUG] - Update ESLint from 8.57.1 to 9.x for Next.js 16 compatibility
2026-Feb-09 10:07:53.085691 [DEBUG] - Fix package-lock.json inconsistencies (picomatch version conflict)
2026-Feb-09 10:07:53.085691 [DEBUG] - Remove deprecated swcMinify config option
2026-Feb-09 10:07:53.085691 [DEBUG] - Add turbopack config for Next.js 16+ compatibility
2026-Feb-09 10:07:53.085691 [DEBUG] - Fix TypeScript errors in extractHeadings (text -> title)
2026-Feb-09 10:07:53.085691 [DEBUG] - Fix TypeScript errors in Header component (submenu undefined check)
2026-Feb-09 10:07:53.085691 [DEBUG] - Fix TypeScript errors in ProjectCard (planlama -> planlaniyor)
2026-Feb-09 10:07:53.085691 [DEBUG] - Regenerate package-lock.json to fix npm ci deployment issues
2026-Feb-09 10:07:53.085691 [DEBUG] - Fix all security vulnerabilities (0 vulnerabilities now)
2026-Feb-09 10:07:53.085691 [DEBUG] - Verified build completes successfully
2026-Feb-09 10:07:54.461563 Generating nixpacks configuration with: nixpacks plan -f json --env NIXPACKS_NODE_VERSION=22 --env COOLIFY_URL=http://scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_FQDN=scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_BRANCH=main --env COOLIFY_RESOURCE_UUID=scwc8ogkwo084s4okw0kgooc /artifacts/sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:07:55.950435 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'nixpacks plan -f json --env NIXPACKS_NODE_VERSION=22 --env COOLIFY_URL=http://scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_FQDN=scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_BRANCH=main --env COOLIFY_RESOURCE_UUID=scwc8ogkwo084s4okw0kgooc /artifacts/sw8o04g48g80wo4k8cw0okcw'
2026-Feb-09 10:07:55.950435 [DEBUG] {
2026-Feb-09 10:07:55.950435 [DEBUG] "providers": [],
2026-Feb-09 10:07:55.950435 [DEBUG] "buildImage": "ghcr.io/railwayapp/nixpacks:ubuntu-1745885067",
2026-Feb-09 10:07:55.950435 [DEBUG] "variables": {
2026-Feb-09 10:07:55.950435 [DEBUG] "CI": "true",
2026-Feb-09 10:07:55.950435 [DEBUG] "COOLIFY_BRANCH": "main",
2026-Feb-09 10:07:55.950435 [DEBUG] "COOLIFY_FQDN": "scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr",
2026-Feb-09 10:07:55.950435 [DEBUG] "COOLIFY_RESOURCE_UUID": "scwc8ogkwo084s4okw0kgooc",
2026-Feb-09 10:07:55.950435 [DEBUG] "COOLIFY_URL": "http://scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr",
2026-Feb-09 10:07:55.950435 [DEBUG] "NIXPACKS_METADATA": "node",
2026-Feb-09 10:07:55.950435 [DEBUG] "NIXPACKS_NODE_VERSION": "22",
2026-Feb-09 10:07:55.950435 [DEBUG] "NODE_ENV": "production",
2026-Feb-09 10:07:55.950435 [DEBUG] "NPM_CONFIG_PRODUCTION": "false"
2026-Feb-09 10:07:55.950435 [DEBUG] },
2026-Feb-09 10:07:55.950435 [DEBUG] "phases": {
2026-Feb-09 10:07:55.950435 [DEBUG] "build": {
2026-Feb-09 10:07:55.950435 [DEBUG] "dependsOn": [
2026-Feb-09 10:07:55.950435 [DEBUG] "install"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "cmds": [
2026-Feb-09 10:07:55.950435 [DEBUG] "npm run build"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "cacheDirectories": [
2026-Feb-09 10:07:55.950435 [DEBUG] ".next/cache",
2026-Feb-09 10:07:55.950435 [DEBUG] "node_modules/.cache"
2026-Feb-09 10:07:55.950435 [DEBUG] ]
2026-Feb-09 10:07:55.950435 [DEBUG] },
2026-Feb-09 10:07:55.950435 [DEBUG] "install": {
2026-Feb-09 10:07:55.950435 [DEBUG] "dependsOn": [
2026-Feb-09 10:07:55.950435 [DEBUG] "setup"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "cmds": [
2026-Feb-09 10:07:55.950435 [DEBUG] "npm ci"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "cacheDirectories": [
2026-Feb-09 10:07:55.950435 [DEBUG] "/root/.npm"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "paths": [
2026-Feb-09 10:07:55.950435 [DEBUG] "/app/node_modules/.bin"
2026-Feb-09 10:07:55.950435 [DEBUG] ]
2026-Feb-09 10:07:55.950435 [DEBUG] },
2026-Feb-09 10:07:55.950435 [DEBUG] "setup": {
2026-Feb-09 10:07:55.950435 [DEBUG] "nixPkgs": [
2026-Feb-09 10:07:55.950435 [DEBUG] "nodejs_22",
2026-Feb-09 10:07:55.950435 [DEBUG] "npm-9_x"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "nixLibs": [
2026-Feb-09 10:07:55.950435 [DEBUG] "gcc-unwrapped"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "nixOverlays": [
2026-Feb-09 10:07:55.950435 [DEBUG] "https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz"
2026-Feb-09 10:07:55.950435 [DEBUG] ],
2026-Feb-09 10:07:55.950435 [DEBUG] "nixpkgsArchive": "ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7"
2026-Feb-09 10:07:55.950435 [DEBUG] }
2026-Feb-09 10:07:55.950435 [DEBUG] },
2026-Feb-09 10:07:55.950435 [DEBUG] "start": {
2026-Feb-09 10:07:55.950435 [DEBUG] "cmd": "npm run start"
2026-Feb-09 10:07:55.950435 [DEBUG] }
2026-Feb-09 10:07:55.950435 [DEBUG] }
2026-Feb-09 10:07:57.222291 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'nixpacks detect /artifacts/sw8o04g48g80wo4k8cw0okcw'
2026-Feb-09 10:07:57.222291 [DEBUG] node
2026-Feb-09 10:07:57.249032 Found application type: node.
2026-Feb-09 10:07:57.276217 If you need further customization, please check the documentation of Nixpacks: https://nixpacks.com/docs/providers/node
2026-Feb-09 10:07:57.314994 [DEBUG] Final Nixpacks plan: {
2026-Feb-09 10:07:57.314994 [DEBUG] "providers": [],
2026-Feb-09 10:07:57.314994 [DEBUG] "buildImage": "ghcr.io\/railwayapp\/nixpacks:ubuntu-1745885067",
2026-Feb-09 10:07:57.314994 [DEBUG] "phases": {
2026-Feb-09 10:07:57.314994 [DEBUG] "build": {
2026-Feb-09 10:07:57.314994 [DEBUG] "dependsOn": [
2026-Feb-09 10:07:57.314994 [DEBUG] "install"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "cmds": [
2026-Feb-09 10:07:57.314994 [DEBUG] "npm run build"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "cacheDirectories": [
2026-Feb-09 10:07:57.314994 [DEBUG] ".next\/cache",
2026-Feb-09 10:07:57.314994 [DEBUG] "node_modules\/.cache"
2026-Feb-09 10:07:57.314994 [DEBUG] ]
2026-Feb-09 10:07:57.314994 [DEBUG] },
2026-Feb-09 10:07:57.314994 [DEBUG] "install": {
2026-Feb-09 10:07:57.314994 [DEBUG] "dependsOn": [
2026-Feb-09 10:07:57.314994 [DEBUG] "setup"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "cmds": [
2026-Feb-09 10:07:57.314994 [DEBUG] "npm ci"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "cacheDirectories": [
2026-Feb-09 10:07:57.314994 [DEBUG] "\/root\/.npm"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "paths": [
2026-Feb-09 10:07:57.314994 [DEBUG] "\/app\/node_modules\/.bin"
2026-Feb-09 10:07:57.314994 [DEBUG] ]
2026-Feb-09 10:07:57.314994 [DEBUG] },
2026-Feb-09 10:07:57.314994 [DEBUG] "setup": {
2026-Feb-09 10:07:57.314994 [DEBUG] "nixPkgs": [
2026-Feb-09 10:07:57.314994 [DEBUG] "nodejs_22",
2026-Feb-09 10:07:57.314994 [DEBUG] "npm-9_x"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "nixLibs": [
2026-Feb-09 10:07:57.314994 [DEBUG] "gcc-unwrapped"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "nixOverlays": [
2026-Feb-09 10:07:57.314994 [DEBUG] "https:\/\/github.com\/railwayapp\/nix-npm-overlay\/archive\/main.tar.gz"
2026-Feb-09 10:07:57.314994 [DEBUG] ],
2026-Feb-09 10:07:57.314994 [DEBUG] "nixpkgsArchive": "ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7",
2026-Feb-09 10:07:57.314994 [DEBUG] "aptPkgs": [
2026-Feb-09 10:07:57.314994 [DEBUG] "curl",
2026-Feb-09 10:07:57.314994 [DEBUG] "wget"
2026-Feb-09 10:07:57.314994 [DEBUG] ]
2026-Feb-09 10:07:57.314994 [DEBUG] }
2026-Feb-09 10:07:57.314994 [DEBUG] },
2026-Feb-09 10:07:57.314994 [DEBUG] "start": {
2026-Feb-09 10:07:57.314994 [DEBUG] "cmd": "npm run start"
2026-Feb-09 10:07:57.314994 [DEBUG] }
2026-Feb-09 10:07:57.314994 [DEBUG] }
2026-Feb-09 10:08:01.011555 [DEBUG] Creating build-time .env file in /artifacts (outside Docker context).
2026-Feb-09 10:08:02.097541 ----------------------------------------
2026-Feb-09 10:08:02.139283 Building docker image started.
2026-Feb-09 10:08:02.164235 To check the current progress, click on Show Debug Logs.
2026-Feb-09 10:08:04.603884 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'nixpacks build -c /artifacts/thegameplan.json --cache-key 'scwc8ogkwo084s4okw0kgooc' --no-error-without-start -n scwc8ogkwo084s4okw0kgooc:b0892a9674ae2c3d669849ae11c925702a1b796f /artifacts/sw8o04g48g80wo4k8cw0okcw -o /artifacts/sw8o04g48g80wo4k8cw0okcw'
2026-Feb-09 10:08:04.603884 [DEBUG] 
2026-Feb-09 10:08:04.603884 [DEBUG] ╔══════════════ Nixpacks v1.41.0 ═════════════╗
2026-Feb-09 10:08:04.603884 [DEBUG] ║ setup      │ nodejs_22, npm-9_x, curl, wget ║
2026-Feb-09 10:08:04.603884 [DEBUG] ║─────────────────────────────────────────────║
2026-Feb-09 10:08:04.603884 [DEBUG] ║ install    │ npm ci                         ║
2026-Feb-09 10:08:04.603884 [DEBUG] ║─────────────────────────────────────────────║
2026-Feb-09 10:08:04.603884 [DEBUG] ║ build      │ npm run build                  ║
2026-Feb-09 10:08:04.603884 [DEBUG] ║─────────────────────────────────────────────║
2026-Feb-09 10:08:04.603884 [DEBUG] ║ start      │ npm run start                  ║
2026-Feb-09 10:08:04.603884 [DEBUG] ╚═════════════════════════════════════════════╝
2026-Feb-09 10:08:04.612090 [DEBUG] Saved output to:
2026-Feb-09 10:08:04.612090 [DEBUG] /artifacts/sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:08:05.650904 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'cat /artifacts/sw8o04g48g80wo4k8cw0okcw/.nixpacks/Dockerfile'
2026-Feb-09 10:08:05.650904 [DEBUG] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] ENTRYPOINT ["/bin/bash", "-l", "-c"]
2026-Feb-09 10:08:05.650904 [DEBUG] WORKDIR /app/
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
2026-Feb-09 10:08:05.650904 [DEBUG] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
2026-Feb-09 10:08:05.650904 [DEBUG] RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] ARG CI COOLIFY_BRANCH COOLIFY_FQDN COOLIFY_RESOURCE_UUID COOLIFY_URL NIXPACKS_METADATA NIXPACKS_NODE_VERSION NODE_ENV NPM_CONFIG_PRODUCTION
2026-Feb-09 10:08:05.650904 [DEBUG] ENV CI=$CI COOLIFY_BRANCH=$COOLIFY_BRANCH COOLIFY_FQDN=$COOLIFY_FQDN COOLIFY_RESOURCE_UUID=$COOLIFY_RESOURCE_UUID COOLIFY_URL=$COOLIFY_URL NIXPACKS_METADATA=$NIXPACKS_METADATA NIXPACKS_NODE_VERSION=$NIXPACKS_NODE_VERSION NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=$NPM_CONFIG_PRODUCTION
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] # setup phase
2026-Feb-09 10:08:05.650904 [DEBUG] # noop
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] # install phase
2026-Feb-09 10:08:05.650904 [DEBUG] ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
2026-Feb-09 10:08:05.650904 [DEBUG] COPY . /app/.
2026-Feb-09 10:08:05.650904 [DEBUG] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] # build phase
2026-Feb-09 10:08:05.650904 [DEBUG] COPY . /app/.
2026-Feb-09 10:08:05.650904 [DEBUG] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] RUN printf '\nPATH=/app/node_modules/.bin:$PATH' >> /root/.profile
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] # start
2026-Feb-09 10:08:05.650904 [DEBUG] COPY . /app
2026-Feb-09 10:08:05.650904 [DEBUG] 
2026-Feb-09 10:08:05.650904 [DEBUG] CMD ["npm run start"]
2026-Feb-09 10:08:08.219574 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'cat /artifacts/build.sh'
2026-Feb-09 10:08:08.219574 [DEBUG] cd /artifacts/sw8o04g48g80wo4k8cw0okcw && set -a && source /artifacts/build-time.env && set +a && docker build --add-host coolify:10.0.1.6 --add-host coolify-db:10.0.1.3 --add-host coolify-realtime:10.0.1.4 --add-host coolify-redis:10.0.1.5 --add-host d8c8w4sk4c8gwcsg8ko4wwkc:10.0.1.7 --network host -f /artifacts/sw8o04g48g80wo4k8cw0okcw/.nixpacks/Dockerfile --progress plain -t scwc8ogkwo084s4okw0kgooc:b0892a9674ae2c3d669849ae11c925702a1b796f --build-arg CI --build-arg COOLIFY_BRANCH --build-arg COOLIFY_FQDN --build-arg COOLIFY_RESOURCE_UUID --build-arg COOLIFY_URL --build-arg NIXPACKS_METADATA --build-arg NIXPACKS_NODE_VERSION --build-arg NODE_ENV --build-arg NPM_CONFIG_PRODUCTION --build-arg COOLIFY_BUILD_SECRETS_HASH=8de06c2232e2afae80e85e1472190ab2c238071f6dd809121ee343c5fd3146d6 --build-arg 'COOLIFY_URL' --build-arg 'COOLIFY_FQDN' --build-arg 'COOLIFY_BRANCH' --build-arg 'COOLIFY_RESOURCE_UUID' /artifacts/sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:08:10.176231 [DEBUG] [CMD]: docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'bash /artifacts/build.sh'
2026-Feb-09 10:08:10.176231 [DEBUG] #0 building with "default" instance using docker driver
2026-Feb-09 10:08:10.176231 [DEBUG] 
2026-Feb-09 10:08:10.176231 [DEBUG] #1 [internal] load build definition from Dockerfile
2026-Feb-09 10:08:10.176231 [DEBUG] #1 transferring dockerfile: 1.43kB done
2026-Feb-09 10:08:10.176231 [DEBUG] #1 DONE 0.0s
2026-Feb-09 10:08:10.176231 [DEBUG] 
2026-Feb-09 10:08:10.176231 [DEBUG] #2 [internal] load metadata for ghcr.io/railwayapp/nixpacks:ubuntu-1745885067
2026-Feb-09 10:08:11.742663 [DEBUG] #2 DONE 1.7s
2026-Feb-09 10:08:11.920293 [DEBUG] #3 [internal] load .dockerignore
2026-Feb-09 10:08:11.920293 [DEBUG] #3 transferring context: 2B done
2026-Feb-09 10:08:11.920293 [DEBUG] #3 DONE 0.0s
2026-Feb-09 10:08:11.920293 [DEBUG] 
2026-Feb-09 10:08:11.920293 [DEBUG] #4 [stage-0  1/11] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067@sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de
2026-Feb-09 10:08:11.920293 [DEBUG] #4 DONE 0.0s
2026-Feb-09 10:08:11.920293 [DEBUG] 
2026-Feb-09 10:08:11.920293 [DEBUG] #5 [internal] load build context
2026-Feb-09 10:08:14.843650 [DEBUG] #5 transferring context: 82.50MB 2.9s done
2026-Feb-09 10:08:14.843650 [DEBUG] #5 DONE 2.9s
2026-Feb-09 10:08:14.843650 [DEBUG] 
2026-Feb-09 10:08:14.843650 [DEBUG] #6 [stage-0  2/11] WORKDIR /app/
2026-Feb-09 10:08:14.843650 [DEBUG] #6 CACHED
2026-Feb-09 10:08:14.843650 [DEBUG] 
2026-Feb-09 10:08:14.843650 [DEBUG] #7 [stage-0  3/11] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
2026-Feb-09 10:08:14.843650 [DEBUG] #7 CACHED
2026-Feb-09 10:08:14.843650 [DEBUG] 
2026-Feb-09 10:08:14.843650 [DEBUG] #8 [stage-0  4/11] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
2026-Feb-09 10:08:15.141870 [DEBUG] #8 0.451 unpacking 'https://github.com/NixOS/nixpkgs/archive/ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.tar.gz' into the Git cache...
2026-Feb-09 10:10:27.254974 [DEBUG] #8 132.6 unpacking 'https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz' into the Git cache...
2026-Feb-09 10:10:31.593030 [DEBUG] #8 136.9 installing 'ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env'
2026-Feb-09 10:10:34.358955 [DEBUG] #8 139.7 these 5 derivations will be built:
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/1f4a312hz9m6y1ssip52drgkim8az4d6-libraries.drv
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/79g4v87v1cgrx5vlwzcagcs6v8ps8fk2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/k57xf6608fm7jd3gxwb9h6nmgh82vlg2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7 these 78 paths will be fetched (122.32 MiB download, 581.57 MiB unpacked):
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin
2026-Feb-09 10:10:34.485139 [DEBUG] #8 139.7   /nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7   /nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.7 copying path '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.497090 [DEBUG] #8 139.8 copying path '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.715196 [DEBUG] #8 140.0 copying path '/nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:34.835664 [DEBUG] #8 140.1 copying path '/nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.820445 [DEBUG] #8 142.1 copying path '/nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.820445 [DEBUG] #8 142.1 copying path '/nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.1 copying path '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.2 copying path '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.2 copying path '/nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.2 copying path '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:36.950859 [DEBUG] #8 142.3 copying path '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.116163 [DEBUG] #8 142.4 copying path '/nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.116163 [DEBUG] #8 142.4 copying path '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.217754 [DEBUG] #8 142.5 copying path '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.358673 [DEBUG] #8 142.5 copying path '/nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.358673 [DEBUG] #8 142.5 copying path '/nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.358673 [DEBUG] #8 142.6 copying path '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.358673 [DEBUG] #8 142.7 copying path '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.462117 [DEBUG] #8 142.7 copying path '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.462117 [DEBUG] #8 142.8 copying path '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.462117 [DEBUG] #8 142.8 copying path '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.462117 [DEBUG] #8 142.8 copying path '/nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.569146 [DEBUG] #8 142.9 copying path '/nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.569146 [DEBUG] #8 142.9 copying path '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.715824 [DEBUG] #8 143.0 copying path '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.817679 [DEBUG] #8 143.0 copying path '/nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.833717 [DEBUG] #8 143.1 copying path '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.833717 [DEBUG] #8 143.1 copying path '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:37.833717 [DEBUG] #8 143.1 copying path '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.010042 [DEBUG] #8 143.3 copying path '/nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.182011 [DEBUG] #8 143.5 copying path '/nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.311250 [DEBUG] #8 143.5 copying path '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.311250 [DEBUG] #8 143.5 copying path '/nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.311250 [DEBUG] #8 143.5 copying path '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.311250 [DEBUG] #8 143.6 copying path '/nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.416333 [DEBUG] #8 143.7 copying path '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.416333 [DEBUG] #8 143.7 copying path '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.416333 [DEBUG] #8 143.7 copying path '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.416333 [DEBUG] #8 143.7 copying path '/nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.628003 [DEBUG] #8 143.9 copying path '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.773675 [DEBUG] #8 144.0 copying path '/nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.785613 [DEBUG] #8 144.0 copying path '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.785613 [DEBUG] #8 144.1 copying path '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.958330 [DEBUG] #8 144.1 copying path '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.958330 [DEBUG] #8 144.1 copying path '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.958330 [DEBUG] #8 144.1 copying path '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:38.958330 [DEBUG] #8 144.1 copying path '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:39.325877 [DEBUG] #8 144.6 copying path '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:39.480398 [DEBUG] #8 144.8 copying path '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:39.664932 [DEBUG] #8 144.8 copying path '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:39.733181 [DEBUG] #8 145.0 copying path '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:39.870090 [DEBUG] #8 145.2 copying path '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:40.184644 [DEBUG] #8 145.5 building '/nix/store/1f4a312hz9m6y1ssip52drgkim8az4d6-libraries.drv'...
2026-Feb-09 10:10:40.673009 [DEBUG] #8 146.0 building '/nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv'...
2026-Feb-09 10:10:41.643663 [DEBUG] #8 147.0 building '/nix/store/79g4v87v1cgrx5vlwzcagcs6v8ps8fk2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 10:10:41.805602 [DEBUG] #8 147.0 copying path '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:41.826728 [DEBUG] #8 147.1 copying path '/nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:41.998428 [DEBUG] #8 147.3
2026-Feb-09 10:10:42.152432 [DEBUG] #8 147.3 trying https://registry.npmjs.org/npm/-/npm-9.9.4.tgz
2026-Feb-09 10:10:42.229943 [DEBUG] #8 147.5   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
2026-Feb-09 10:10:42.229943 [DEBUG] #8 147.5                                  Dload  Upload   Total   Spent    Left  Speed
2026-Feb-09 10:10:42.386259 [DEBUG] #8 147.7 100 2648k  100 2648k    0     0  7521k      0 --:--:-- --:--:-- --:--:-- 7544k
2026-Feb-09 10:10:42.400995 [DEBUG] 
2026-Feb-09 10:10:42.657603 [DEBUG] #8 148.0 copying path '/nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:52.429701 [DEBUG] #8 157.7 copying path '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:52.663125 [DEBUG] #8 157.8 copying path '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 10:10:52.751336 [DEBUG] #8 158.1 building '/nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv'...
2026-Feb-09 10:10:53.125778 [DEBUG] #8 158.4 Running phase: unpackPhase
2026-Feb-09 10:10:53.298578 [DEBUG] #8 158.5 unpacking source archive /nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz
2026-Feb-09 10:10:54.066827 [DEBUG] #8 159.4 source root is package
2026-Feb-09 10:10:54.457501 [DEBUG] #8 159.8 setting SOURCE_DATE_EPOCH to timestamp 499162500 of file package/package.json
2026-Feb-09 10:10:54.642576 [DEBUG] #8 159.8 Running phase: installPhase
2026-Feb-09 10:10:58.776918 [DEBUG] #8 164.1 building '/nix/store/k57xf6608fm7jd3gxwb9h6nmgh82vlg2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 10:10:59.225930 [DEBUG] #8 164.5 created 33 symlinks in user environment
2026-Feb-09 10:10:59.785965 [DEBUG] #8 165.1 building '/nix/store/57xki8c7krhax7r4mdr0icil5dklppb2-user-environment.drv'...
2026-Feb-09 10:11:00.765286 [DEBUG] #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 removing profile version 1
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 finding garbage collector roots...
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 removing stale link from '/nix/var/nix/gcroots/auto/lzjbmb2ry0z7lma2fvpqprb12921pnb5' to '/nix/var/nix/profiles/per-user/root/profile-1-link'
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 deleting garbage...
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 deleting '/nix/store/a9qf4wwhympzs35ncp80r185j6a21w07-user-environment'
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 deleting '/nix/store/253kwn1730vnay87xkjgxa2v97w3y079-user-environment.drv'
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.1 deleting '/nix/store/hn5mrh362n52x8wwab9s1v6bgn4n5c94-env-manifest.nix'
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.2 deleting '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux'
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.2 deleting '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux'
2026-Feb-09 10:11:00.899924 [DEBUG] #8 166.2 deleting '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0'
2026-Feb-09 10:11:01.001355 [DEBUG] #8 166.2 deleting '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116'
2026-Feb-09 10:11:01.001355 [DEBUG] #8 166.2 deleting '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116'
2026-Feb-09 10:11:01.001355 [DEBUG] #8 166.3 deleting '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.3 deleting '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.4 deleting '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.4 deleting '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.4 deleting '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0'
2026-Feb-09 10:11:01.205346 [DEBUG] #8 166.4 deleting '/nix/store/lwi59jcfwk2lnrakmm1y5vw85hj3n1bi-source'
2026-Feb-09 10:11:09.548252 [DEBUG] #8 174.9 deleting '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0'
2026-Feb-09 10:11:09.745025 [DEBUG] #8 175.1 deleting '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35'
2026-Feb-09 10:11:09.934704 [DEBUG] #8 175.1 deleting '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin'
2026-Feb-09 10:11:09.971674 [DEBUG] #8 175.1 deleting '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev'
2026-Feb-09 10:11:09.971674 [DEBUG] #8 175.1 deleting '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9'
2026-Feb-09 10:11:09.971674 [DEBUG] #8 175.1 deleting '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin'
2026-Feb-09 10:11:09.971674 [DEBUG] #8 175.1 deleting '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev'
2026-Feb-09 10:11:09.971674 [DEBUG] #8 175.1 deleting '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1'
2026-Feb-09 10:11:09.971674 [DEBUG] #8 175.2 deleting '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.2 deleting '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/m84a5qpv8vgdy0mm1d81x6bajmdax5fj-source'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin'
2026-Feb-09 10:11:10.043021 [DEBUG] #8 175.3 deleting '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.3 deleting '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/9fxr7753z31rn59i64dqaajgsx0ap91p-libraries'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.4 deleting '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12'
2026-Feb-09 10:11:10.169478 [DEBUG] #8 175.5 deleting '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man'
2026-Feb-09 10:11:10.339013 [DEBUG] #8 175.5 deleting '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0'
2026-Feb-09 10:11:10.339013 [DEBUG] #8 175.5 deleting unused links...
2026-Feb-09 10:11:22.176001 [DEBUG] #8 187.5 note: currently hard linking saves 3.00 MiB
2026-Feb-09 10:11:22.318581 [DEBUG] #8 187.6 61 store paths deleted, 559.41 MiB freed
2026-Feb-09 10:11:22.543183 [DEBUG] #8 DONE 187.9s
2026-Feb-09 10:11:22.703079 [DEBUG] #9 [stage-0  5/11] RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget
2026-Feb-09 10:11:23.216613 [DEBUG] #9 0.667 Get:1 http://archive.ubuntu.com/ubuntu noble InRelease [256 kB]
2026-Feb-09 10:11:23.367487 [DEBUG] #9 0.667 Get:2 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
2026-Feb-09 10:11:23.487220 [DEBUG] #9 0.938 Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
2026-Feb-09 10:11:23.711324 [DEBUG] #9 1.012 Get:4 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
2026-Feb-09 10:11:23.806459 [DEBUG] #9 1.258 Get:5 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [34.8 kB]
2026-Feb-09 10:11:24.056769 [DEBUG] #9 1.357 Get:6 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1802 kB]
2026-Feb-09 10:11:24.131597 [DEBUG] #9 1.583 Get:7 http://archive.ubuntu.com/ubuntu noble/restricted amd64 Packages [117 kB]
2026-Feb-09 10:11:24.367084 [DEBUG] #9 1.614 Get:8 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1199 kB]
2026-Feb-09 10:11:24.367084 [DEBUG] #9 1.661 Get:9 http://archive.ubuntu.com/ubuntu noble/universe amd64 Packages [19.3 MB]
2026-Feb-09 10:11:24.367084 [DEBUG] #9 1.666 Get:10 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [3061 kB]
2026-Feb-09 10:11:24.905109 [DEBUG] #9 2.354 Get:11 http://archive.ubuntu.com/ubuntu noble/multiverse amd64 Packages [331 kB]
2026-Feb-09 10:11:25.038226 [DEBUG] #9 2.368 Get:12 http://archive.ubuntu.com/ubuntu noble/main amd64 Packages [1808 kB]
2026-Feb-09 10:11:25.038226 [DEBUG] #9 2.427 Get:13 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [38.1 kB]
2026-Feb-09 10:11:25.038226 [DEBUG] #9 2.429 Get:14 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [2198 kB]
2026-Feb-09 10:11:25.052771 [DEBUG] #9 2.488 Get:15 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [3280 kB]
2026-Feb-09 10:11:25.142523 [DEBUG] #9 2.562 Get:16 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1977 kB]
2026-Feb-09 10:11:25.142523 [DEBUG] #9 2.593 Get:17 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [34.6 kB]
2026-Feb-09 10:11:25.299874 [DEBUG] #9 2.594 Get:18 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Packages [49.5 kB]
2026-Feb-09 10:11:28.208517 [DEBUG] #9 5.653 Fetched 35.9 MB in 5s (7018 kB/s)
2026-Feb-09 10:11:28.208517 [DEBUG] #9 5.653 Reading package lists...
2026-Feb-09 10:11:31.210633 [DEBUG] 
2026-Feb-09 10:11:31.337175 [DEBUG] #9 8.788 Reading package lists...
2026-Feb-09 10:11:34.972900 [DEBUG] 
2026-Feb-09 10:11:35.212920 [DEBUG] #9 12.51 Building dependency tree...
2026-Feb-09 10:11:35.735563 [DEBUG] #9 13.19 Reading state information...
2026-Feb-09 10:11:35.887476 [DEBUG] 
2026-Feb-09 10:11:36.733948 [DEBUG] #9 14.19 curl is already the newest version (8.5.0-2ubuntu10.6).
2026-Feb-09 10:11:36.733948 [DEBUG] #9 14.19 The following NEW packages will be installed:
2026-Feb-09 10:11:36.733948 [DEBUG] #9 14.19   wget
2026-Feb-09 10:11:36.967227 [DEBUG] #9 14.42 0 upgraded, 1 newly installed, 0 to remove and 42 not upgraded.
2026-Feb-09 10:11:36.967227 [DEBUG] #9 14.42 Need to get 334 kB of archives.
2026-Feb-09 10:11:36.967227 [DEBUG] #9 14.42 After this operation, 938 kB of additional disk space will be used.
2026-Feb-09 10:11:36.967227 [DEBUG] #9 14.42 Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 wget amd64 1.21.4-1ubuntu4.1 [334 kB]
2026-Feb-09 10:11:37.873629 [DEBUG] #9 15.32 debconf: delaying package configuration, since apt-utils is not installed
2026-Feb-09 10:11:38.026896 [DEBUG] #9 15.48 Fetched 334 kB in 0s (804 kB/s)
2026-Feb-09 10:11:38.137091 [DEBUG] #9 15.59 Selecting previously unselected package wget.
2026-Feb-09 10:11:38.137091 [DEBUG] #9 15.59 (Reading database ...
2026-Feb-09 10:11:38.243166 [DEBUG] (Reading database ... 5%
(Reading database ... 10%
(Reading database ... 15%
(Reading database ... 20%
(Reading database ... 25%
(Reading database ... 30%
(Reading database ... 35%
(Reading database ... 40%
(Reading database ... 45%
(Reading database ... 50%
(Reading database ... 55%
(Reading database ... 60%
(Reading database ... 65%
(Reading database ... 70%
(Reading database ... 75%
(Reading database ... 80%
(Reading database ... 85%
(Reading database ... 90%
(Reading database ... 95%
2026-Feb-09 10:11:38.421432 [DEBUG] (Reading database ... 100%
(Reading database ... 9511 files and directories currently installed.)
2026-Feb-09 10:11:38.421432 [DEBUG] #9 15.72 Preparing to unpack .../wget_1.21.4-1ubuntu4.1_amd64.deb ...
2026-Feb-09 10:11:38.421432 [DEBUG] #9 15.72 Unpacking wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 10:11:38.432127 [DEBUG] #9 15.88 Setting up wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 10:11:38.734971 [DEBUG] #9 DONE 16.2s
2026-Feb-09 10:11:38.887754 [DEBUG] #10 [stage-0  6/11] COPY . /app/.
2026-Feb-09 10:11:39.704114 [DEBUG] #10 DONE 1.0s
2026-Feb-09 10:11:39.862762 [DEBUG] #11 [stage-0  7/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 10:11:40.448886 [DEBUG] #11 0.745 npm warn config production Use `--omit=dev` instead.
2026-Feb-09 10:11:40.467979 [DEBUG] 
2026-Feb-09 10:11:43.285479 [DEBUG] #11 3.577 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn While resolving: @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn node_modules/eslint
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn   @typescript-eslint/eslint-plugin@"8.54.0" from typescript-eslint@8.54.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn   node_modules/typescript-eslint
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn node_modules/eslint
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn     @typescript-eslint/eslint-plugin@"8.54.0" from typescript-eslint@8.54.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.581 npm warn     node_modules/typescript-eslint
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.615 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.617 npm warn While resolving: @typescript-eslint/parser@8.54.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.617 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.617 npm warn node_modules/eslint
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.617 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.454532 [DEBUG] #11 3.617 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/parser@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn node_modules/@typescript-eslint/parser
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn   peer @typescript-eslint/parser@"^8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn   1 more (typescript-eslint)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/parser@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn   node_modules/@typescript-eslint/parser
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn     peer @typescript-eslint/parser@"^8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn     node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.617 npm warn     1 more (typescript-eslint)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.632 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn While resolving: @typescript-eslint/type-utils@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/type-utils@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn node_modules/@typescript-eslint/type-utils
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn   @typescript-eslint/type-utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/type-utils@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn   node_modules/@typescript-eslint/type-utils
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn     @typescript-eslint/type-utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.633 npm warn     node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn While resolving: @typescript-eslint/utils@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/utils@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn node_modules/@typescript-eslint/utils
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   @typescript-eslint/utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   2 more (@typescript-eslint/type-utils, typescript-eslint)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/utils@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn   node_modules/@typescript-eslint/utils
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn     @typescript-eslint/utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn     node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.647 npm warn     2 more (@typescript-eslint/type-utils, typescript-eslint)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn While resolving: eslint-plugin-import@2.32.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9" from eslint-plugin-import@2.32.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn node_modules/eslint-plugin-import
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   eslint-plugin-import@"^2.32.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   1 more (eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn node_modules/eslint
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9" from eslint-plugin-import@2.32.0
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn   node_modules/eslint-plugin-import
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn     eslint-plugin-import@"^2.32.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:11:43.474235 [DEBUG] #11 3.750 npm warn     1 more (eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn While resolving: eslint-plugin-jsx-a11y@6.10.2
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn node_modules/eslint
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9" from eslint-plugin-jsx-a11y@6.10.2
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn node_modules/eslint-plugin-jsx-a11y
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn   eslint-plugin-jsx-a11y@"^6.10.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn node_modules/eslint
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9" from eslint-plugin-jsx-a11y@6.10.2
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn   node_modules/eslint-plugin-jsx-a11y
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn     eslint-plugin-jsx-a11y@"^6.10.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.588776 [DEBUG] #11 3.884 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn While resolving: eslint-plugin-react@7.37.5
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn node_modules/eslint
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn node_modules/eslint-plugin-react
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn   eslint-plugin-react@"^7.37.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn node_modules/eslint
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn   node_modules/eslint-plugin-react
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn     eslint-plugin-react@"^7.37.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.752188 [DEBUG] #11 4.045 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn While resolving: eslint-plugin-react-hooks@7.0.1
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn node_modules/eslint
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn Could not resolve dependency:
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn peer eslint@"^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0" from eslint-plugin-react-hooks@7.0.1
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn node_modules/eslint-plugin-react-hooks
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn   eslint-plugin-react-hooks@"^7.0.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn node_modules/eslint
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn   peer eslint@"^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0" from eslint-plugin-react-hooks@7.0.1
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn   node_modules/eslint-plugin-react-hooks
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn     eslint-plugin-react-hooks@"^7.0.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:43.890642 [DEBUG] #11 4.187 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn While resolving: typescript-eslint@8.54.0
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn Found: eslint@10.0.0
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn node_modules/eslint
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn Could not resolve dependency:
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn peer eslint@"^8.57.0 || ^9.0.0" from typescript-eslint@8.54.0
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn node_modules/typescript-eslint
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn   typescript-eslint@"^8.46.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn node_modules/eslint
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from typescript-eslint@8.54.0
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn   node_modules/typescript-eslint
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn     typescript-eslint@"^8.46.0" from eslint-config-next@16.1.6
2026-Feb-09 10:11:44.059517 [DEBUG] #11 4.201 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:11:44.740209 [DEBUG] #11 5.035 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:44.740209 [DEBUG] #11 5.035 npm warn EBADENGINE   package: '@eslint/config-array@0.23.1',
2026-Feb-09 10:11:44.740209 [DEBUG] #11 5.035 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:44.740209 [DEBUG] #11 5.035 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:44.740209 [DEBUG] #11 5.035 npm warn EBADENGINE }
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.103 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.103 npm warn EBADENGINE   package: '@eslint/config-helpers@0.5.2',
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.103 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.103 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.103 npm warn EBADENGINE }
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.142 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.142 npm warn EBADENGINE   package: '@eslint/core@1.1.0',
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.142 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.142 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:44.846959 [DEBUG] #11 5.142 npm warn EBADENGINE }
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.173 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.173 npm warn EBADENGINE   package: '@eslint/object-schema@3.0.1',
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.173 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.173 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.173 npm warn EBADENGINE }
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.194 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.194 npm warn EBADENGINE   package: '@eslint/plugin-kit@0.6.0',
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.194 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.194 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:45.049831 [DEBUG] #11 5.194 npm warn EBADENGINE }
2026-Feb-09 10:11:49.470350 [DEBUG] #11 9.767 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:49.470350 [DEBUG] #11 9.767 npm warn EBADENGINE   package: 'eslint@10.0.0',
2026-Feb-09 10:11:49.470350 [DEBUG] #11 9.767 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:49.470350 [DEBUG] #11 9.767 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:49.470350 [DEBUG] #11 9.767 npm warn EBADENGINE }
2026-Feb-09 10:11:49.906428 [DEBUG] #11 10.20 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:49.906428 [DEBUG] #11 10.20 npm warn EBADENGINE   package: 'eslint-scope@9.1.0',
2026-Feb-09 10:11:49.906428 [DEBUG] #11 10.20 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:49.906428 [DEBUG] #11 10.20 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:49.906428 [DEBUG] #11 10.20 npm warn EBADENGINE }
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.25 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.25 npm warn EBADENGINE   package: 'eslint-visitor-keys@5.0.0',
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.25 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.25 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.25 npm warn EBADENGINE }
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.31 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.31 npm warn EBADENGINE   package: 'espree@11.1.0',
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.31 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.31 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:50.015461 [DEBUG] #11 10.31 npm warn EBADENGINE }
2026-Feb-09 10:11:50.190531 [DEBUG] #11 10.34 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:11:50.208015 [DEBUG] #11 10.34 npm warn EBADENGINE   package: 'eslint-visitor-keys@5.0.0',
2026-Feb-09 10:11:50.208015 [DEBUG] #11 10.34 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:11:50.208015 [DEBUG] #11 10.34 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:11:50.208015 [DEBUG] #11 10.34 npm warn EBADENGINE }
2026-Feb-09 10:12:53.349992 [DEBUG] #11 73.64
2026-Feb-09 10:12:53.349992 [DEBUG] #11 73.64 added 601 packages, and audited 602 packages in 1m
2026-Feb-09 10:12:53.349992 [DEBUG] #11 73.64
2026-Feb-09 10:12:53.349992 [DEBUG] #11 73.64 271 packages are looking for funding
2026-Feb-09 10:12:53.349992 [DEBUG] #11 73.64   run `npm fund` for details
2026-Feb-09 10:12:53.506423 [DEBUG] #11 73.65
2026-Feb-09 10:12:53.506423 [DEBUG] #11 73.65 found 0 vulnerabilities
2026-Feb-09 10:12:54.739631 [DEBUG] #11 DONE 75.0s
2026-Feb-09 10:12:54.894721 [DEBUG] #12 [stage-0  8/11] COPY . /app/.
2026-Feb-09 10:12:55.526307 [DEBUG] #12 DONE 0.8s
2026-Feb-09 10:12:55.687487 [DEBUG] #13 [stage-0  9/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build
2026-Feb-09 10:12:56.369874 [DEBUG] #13 0.841 npm warn config production Use `--omit=dev` instead.
2026-Feb-09 10:12:56.500056 [DEBUG] #13 0.969
2026-Feb-09 10:12:56.500056 [DEBUG] #13 0.969 > esguvenir-web@1.0.0 build
2026-Feb-09 10:12:56.500056 [DEBUG] #13 0.969 > next build
2026-Feb-09 10:12:56.500056 [DEBUG] #13 0.969
2026-Feb-09 10:12:58.792027 [DEBUG] #13 3.263 ⨯ Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.265
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.269 > Build error occurred
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.278 Error: require() of ES Module /app/node_modules/remark-gfm/index.js from /app/next.config.js not supported.
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.278 Instead change the require of index.js in /app/next.config.js to a dynamic import() which is available in all CommonJS modules.
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.278     at Object.<anonymous> (next.config.js:4:21) {
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.278   code: 'ERR_REQUIRE_ESM'
2026-Feb-09 10:12:58.974539 [DEBUG] #13 3.278 }
2026-Feb-09 10:12:59.052547 [DEBUG] #13 ERROR: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 1
2026-Feb-09 10:12:59.169176 [DEBUG] ------
2026-Feb-09 10:12:59.169176 [DEBUG] > [stage-0  9/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build:
2026-Feb-09 10:12:59.169176 [DEBUG] 0.969 > next build
2026-Feb-09 10:12:59.169176 [DEBUG] 0.969
2026-Feb-09 10:12:59.169176 [DEBUG] 3.263 ⨯ Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error
2026-Feb-09 10:12:59.169176 [DEBUG] 3.265
2026-Feb-09 10:12:59.169176 [DEBUG] 3.269 > Build error occurred
2026-Feb-09 10:12:59.169176 [DEBUG] 3.278 Error: require() of ES Module /app/node_modules/remark-gfm/index.js from /app/next.config.js not supported.
2026-Feb-09 10:12:59.169176 [DEBUG] 3.278 Instead change the require of index.js in /app/next.config.js to a dynamic import() which is available in all CommonJS modules.
2026-Feb-09 10:12:59.169176 [DEBUG] 3.278     at Object.<anonymous> (next.config.js:4:21) {
2026-Feb-09 10:12:59.169176 [DEBUG] 3.278   code: 'ERR_REQUIRE_ESM'
2026-Feb-09 10:12:59.169176 [DEBUG] 3.278 }
2026-Feb-09 10:12:59.169176 [DEBUG] ------
2026-Feb-09 10:12:59.189804 [DEBUG] 1 warning found (use docker --debug to expand):
2026-Feb-09 10:12:59.189804 [DEBUG] - UndefinedVar: Usage of undefined variable '$NIXPACKS_PATH' (line 18)
2026-Feb-09 10:12:59.189804 [DEBUG] Dockerfile:24
2026-Feb-09 10:12:59.189804 [DEBUG] --------------------
2026-Feb-09 10:12:59.189804 [DEBUG] 22 |     # build phase
2026-Feb-09 10:12:59.189804 [DEBUG] 23 |     COPY . /app/.
2026-Feb-09 10:12:59.189804 [DEBUG] 24 | >>> RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build
2026-Feb-09 10:12:59.189804 [DEBUG] 25 |
2026-Feb-09 10:12:59.189804 [DEBUG] 26 |
2026-Feb-09 10:12:59.189804 [DEBUG] --------------------
2026-Feb-09 10:12:59.189804 [DEBUG] ERROR: failed to build: failed to solve: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 1
2026-Feb-09 10:12:59.213210 [DEBUG] exit status 1
2026-Feb-09 10:12:59.474873 ========================================
2026-Feb-09 10:12:59.524882 Deployment failed: Command execution failed (exit code 1): docker exec sw8o04g48g80wo4k8cw0okcw bash -c 'bash /artifacts/build.sh'
2026-Feb-09 10:12:59.524882 Error: #0 building with "default" instance using docker driver
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #1 [internal] load build definition from Dockerfile
2026-Feb-09 10:12:59.524882 #1 transferring dockerfile: 1.43kB done
2026-Feb-09 10:12:59.524882 #1 DONE 0.0s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #2 [internal] load metadata for ghcr.io/railwayapp/nixpacks:ubuntu-1745885067
2026-Feb-09 10:12:59.524882 #2 DONE 1.7s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #3 [internal] load .dockerignore
2026-Feb-09 10:12:59.524882 #3 transferring context: 2B done
2026-Feb-09 10:12:59.524882 #3 DONE 0.0s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #4 [stage-0  1/11] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067@sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de
2026-Feb-09 10:12:59.524882 #4 DONE 0.0s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #5 [internal] load build context
2026-Feb-09 10:12:59.524882 #5 transferring context: 82.50MB 2.9s done
2026-Feb-09 10:12:59.524882 #5 DONE 2.9s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #6 [stage-0  2/11] WORKDIR /app/
2026-Feb-09 10:12:59.524882 #6 CACHED
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #7 [stage-0  3/11] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
2026-Feb-09 10:12:59.524882 #7 CACHED
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #8 [stage-0  4/11] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
2026-Feb-09 10:12:59.524882 #8 0.451 unpacking 'https://github.com/NixOS/nixpkgs/archive/ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.tar.gz' into the Git cache...
2026-Feb-09 10:12:59.524882 #8 132.6 unpacking 'https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz' into the Git cache...
2026-Feb-09 10:12:59.524882 #8 136.9 installing 'ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env'
2026-Feb-09 10:12:59.524882 #8 139.7 these 5 derivations will be built:
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/1f4a312hz9m6y1ssip52drgkim8az4d6-libraries.drv
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/79g4v87v1cgrx5vlwzcagcs6v8ps8fk2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/k57xf6608fm7jd3gxwb9h6nmgh82vlg2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 10:12:59.524882 #8 139.7 these 78 paths will be fetched (122.32 MiB download, 581.57 MiB unpacked):
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1
2026-Feb-09 10:12:59.524882 #8 139.7   /nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.7 copying path '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 139.8 copying path '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 140.0 copying path '/nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 140.1 copying path '/nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.1 copying path '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.2 copying path '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.2 copying path '/nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.2 copying path '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.3 copying path '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.4 copying path '/nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.4 copying path '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.5 copying path '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.5 copying path '/nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.5 copying path '/nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.6 copying path '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.7 copying path '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.7 copying path '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.8 copying path '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.8 copying path '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.8 copying path '/nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.9 copying path '/nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 142.9 copying path '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.0 copying path '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.0 copying path '/nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.1 copying path '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.1 copying path '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.1 copying path '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.3 copying path '/nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.5 copying path '/nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.5 copying path '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.5 copying path '/nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.5 copying path '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.6 copying path '/nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.7 copying path '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.7 copying path '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.7 copying path '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.7 copying path '/nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 143.9 copying path '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.0 copying path '/nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.0 copying path '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.1 copying path '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.1 copying path '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.1 copying path '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.1 copying path '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.1 copying path '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.6 copying path '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.8 copying path '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 144.8 copying path '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 145.0 copying path '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 145.2 copying path '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 145.5 building '/nix/store/1f4a312hz9m6y1ssip52drgkim8az4d6-libraries.drv'...
2026-Feb-09 10:12:59.524882 #8 146.0 building '/nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv'...
2026-Feb-09 10:12:59.524882 #8 147.0 building '/nix/store/79g4v87v1cgrx5vlwzcagcs6v8ps8fk2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 10:12:59.524882 #8 147.0 copying path '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 147.1 copying path '/nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 147.3
2026-Feb-09 10:12:59.524882 #8 147.3 trying https://registry.npmjs.org/npm/-/npm-9.9.4.tgz
2026-Feb-09 10:12:59.524882 #8 147.5   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
2026-Feb-09 10:12:59.524882 #8 147.5                                  Dload  Upload   Total   Spent    Left  Speed
2026-Feb-09 10:12:59.524882 #8 147.7 100 2648k  100 2648k    0     0  7521k      0 --:--:-- --:--:-- --:--:-- 7544k
2026-Feb-09 10:12:59.524882 #8 148.0 copying path '/nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 157.7 copying path '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 157.8 copying path '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 10:12:59.524882 #8 158.1 building '/nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv'...
2026-Feb-09 10:12:59.524882 #8 158.4 Running phase: unpackPhase
2026-Feb-09 10:12:59.524882 #8 158.5 unpacking source archive /nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz
2026-Feb-09 10:12:59.524882 #8 159.4 source root is package
2026-Feb-09 10:12:59.524882 #8 159.8 setting SOURCE_DATE_EPOCH to timestamp 499162500 of file package/package.json
2026-Feb-09 10:12:59.524882 #8 159.8 Running phase: installPhase
2026-Feb-09 10:12:59.524882 #8 164.1 building '/nix/store/k57xf6608fm7jd3gxwb9h6nmgh82vlg2-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 10:12:59.524882 #8 164.5 created 33 symlinks in user environment
2026-Feb-09 10:12:59.524882 #8 165.1 building '/nix/store/57xki8c7krhax7r4mdr0icil5dklppb2-user-environment.drv'...
2026-Feb-09 10:12:59.524882 #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 10:12:59.524882 #8 166.1 removing profile version 1
2026-Feb-09 10:12:59.524882 #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 10:12:59.524882 #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 10:12:59.524882 #8 166.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 10:12:59.524882 #8 166.1 finding garbage collector roots...
2026-Feb-09 10:12:59.524882 #8 166.1 removing stale link from '/nix/var/nix/gcroots/auto/lzjbmb2ry0z7lma2fvpqprb12921pnb5' to '/nix/var/nix/profiles/per-user/root/profile-1-link'
2026-Feb-09 10:12:59.524882 #8 166.1 deleting garbage...
2026-Feb-09 10:12:59.524882 #8 166.1 deleting '/nix/store/a9qf4wwhympzs35ncp80r185j6a21w07-user-environment'
2026-Feb-09 10:12:59.524882 #8 166.1 deleting '/nix/store/253kwn1730vnay87xkjgxa2v97w3y079-user-environment.drv'
2026-Feb-09 10:12:59.524882 #8 166.1 deleting '/nix/store/hn5mrh362n52x8wwab9s1v6bgn4n5c94-env-manifest.nix'
2026-Feb-09 10:12:59.524882 #8 166.2 deleting '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux'
2026-Feb-09 10:12:59.524882 #8 166.2 deleting '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux'
2026-Feb-09 10:12:59.524882 #8 166.2 deleting '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0'
2026-Feb-09 10:12:59.524882 #8 166.2 deleting '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116'
2026-Feb-09 10:12:59.524882 #8 166.2 deleting '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0'
2026-Feb-09 10:12:59.524882 #8 166.3 deleting '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10'
2026-Feb-09 10:12:59.524882 #8 166.4 deleting '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1'
2026-Feb-09 10:12:59.524882 #8 166.4 deleting '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev'
2026-Feb-09 10:12:59.524882 #8 166.4 deleting '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0'
2026-Feb-09 10:12:59.524882 #8 166.4 deleting '/nix/store/lwi59jcfwk2lnrakmm1y5vw85hj3n1bi-source'
2026-Feb-09 10:12:59.524882 #8 174.9 deleting '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev'
2026-Feb-09 10:12:59.524882 #8 175.1 deleting '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1'
2026-Feb-09 10:12:59.524882 #8 175.2 deleting '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46'
2026-Feb-09 10:12:59.524882 #8 175.2 deleting '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/m84a5qpv8vgdy0mm1d81x6bajmdax5fj-source'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib'
2026-Feb-09 10:12:59.524882 #8 175.3 deleting '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/9fxr7753z31rn59i64dqaajgsx0ap91p-libraries'
2026-Feb-09 10:12:59.524882 #8 175.4 deleting '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12'
2026-Feb-09 10:12:59.524882 #8 175.5 deleting '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man'
2026-Feb-09 10:12:59.524882 #8 175.5 deleting '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0'
2026-Feb-09 10:12:59.524882 #8 175.5 deleting unused links...
2026-Feb-09 10:12:59.524882 #8 187.5 note: currently hard linking saves 3.00 MiB
2026-Feb-09 10:12:59.524882 #8 187.6 61 store paths deleted, 559.41 MiB freed
2026-Feb-09 10:12:59.524882 #8 DONE 187.9s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #9 [stage-0  5/11] RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget
2026-Feb-09 10:12:59.524882 #9 0.667 Get:1 http://archive.ubuntu.com/ubuntu noble InRelease [256 kB]
2026-Feb-09 10:12:59.524882 #9 0.667 Get:2 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
2026-Feb-09 10:12:59.524882 #9 0.938 Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
2026-Feb-09 10:12:59.524882 #9 1.012 Get:4 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
2026-Feb-09 10:12:59.524882 #9 1.258 Get:5 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [34.8 kB]
2026-Feb-09 10:12:59.524882 #9 1.357 Get:6 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1802 kB]
2026-Feb-09 10:12:59.524882 #9 1.583 Get:7 http://archive.ubuntu.com/ubuntu noble/restricted amd64 Packages [117 kB]
2026-Feb-09 10:12:59.524882 #9 1.614 Get:8 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1199 kB]
2026-Feb-09 10:12:59.524882 #9 1.661 Get:9 http://archive.ubuntu.com/ubuntu noble/universe amd64 Packages [19.3 MB]
2026-Feb-09 10:12:59.524882 #9 1.666 Get:10 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [3061 kB]
2026-Feb-09 10:12:59.524882 #9 2.354 Get:11 http://archive.ubuntu.com/ubuntu noble/multiverse amd64 Packages [331 kB]
2026-Feb-09 10:12:59.524882 #9 2.368 Get:12 http://archive.ubuntu.com/ubuntu noble/main amd64 Packages [1808 kB]
2026-Feb-09 10:12:59.524882 #9 2.427 Get:13 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [38.1 kB]
2026-Feb-09 10:12:59.524882 #9 2.429 Get:14 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [2198 kB]
2026-Feb-09 10:12:59.524882 #9 2.488 Get:15 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [3280 kB]
2026-Feb-09 10:12:59.524882 #9 2.562 Get:16 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1977 kB]
2026-Feb-09 10:12:59.524882 #9 2.593 Get:17 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [34.6 kB]
2026-Feb-09 10:12:59.524882 #9 2.594 Get:18 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Packages [49.5 kB]
2026-Feb-09 10:12:59.524882 #9 5.653 Fetched 35.9 MB in 5s (7018 kB/s)
2026-Feb-09 10:12:59.524882 #9 5.653 Reading package lists...
2026-Feb-09 10:12:59.524882 #9 8.788 Reading package lists...
2026-Feb-09 10:12:59.524882 #9 12.51 Building dependency tree...
2026-Feb-09 10:12:59.524882 #9 13.19 Reading state information...
2026-Feb-09 10:12:59.524882 #9 14.19 curl is already the newest version (8.5.0-2ubuntu10.6).
2026-Feb-09 10:12:59.524882 #9 14.19 The following NEW packages will be installed:
2026-Feb-09 10:12:59.524882 #9 14.19   wget
2026-Feb-09 10:12:59.524882 #9 14.42 0 upgraded, 1 newly installed, 0 to remove and 42 not upgraded.
2026-Feb-09 10:12:59.524882 #9 14.42 Need to get 334 kB of archives.
2026-Feb-09 10:12:59.524882 #9 14.42 After this operation, 938 kB of additional disk space will be used.
2026-Feb-09 10:12:59.524882 #9 14.42 Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 wget amd64 1.21.4-1ubuntu4.1 [334 kB]
2026-Feb-09 10:12:59.524882 #9 15.32 debconf: delaying package configuration, since apt-utils is not installed
2026-Feb-09 10:12:59.524882 #9 15.48 Fetched 334 kB in 0s (804 kB/s)
2026-Feb-09 10:12:59.524882 #9 15.59 Selecting previously unselected package wget.
2026-Feb-09 10:12:59.524882 #9 15.59 (Reading database ... 
(Reading database ... 5%
(Reading database ... 10%
(Reading database ... 15%
(Reading database ... 20%
(Reading database ... 25%
(Reading database ... 30%
(Reading database ... 35%
(Reading database ... 40%
(Reading database ... 45%
(Reading database ... 50%
(Reading database ... 55%
(Reading database ... 60%
(Reading database ... 65%
(Reading database ... 70%
(Reading database ... 75%
(Reading database ... 80%
(Reading database ... 85%
(Reading database ... 90%
(Reading database ... 95%
(Reading database ... 100%
(Reading database ... 9511 files and directories currently installed.)
2026-Feb-09 10:12:59.524882 #9 15.72 Preparing to unpack .../wget_1.21.4-1ubuntu4.1_amd64.deb ...
2026-Feb-09 10:12:59.524882 #9 15.72 Unpacking wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 10:12:59.524882 #9 15.88 Setting up wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 10:12:59.524882 #9 DONE 16.2s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #10 [stage-0  6/11] COPY . /app/.
2026-Feb-09 10:12:59.524882 #10 DONE 1.0s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #11 [stage-0  7/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 10:12:59.524882 #11 0.745 npm warn config production Use `--omit=dev` instead.
2026-Feb-09 10:12:59.524882 #11 3.577 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn While resolving: @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn   @typescript-eslint/eslint-plugin@"8.54.0" from typescript-eslint@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn   node_modules/typescript-eslint
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn     @typescript-eslint/eslint-plugin@"8.54.0" from typescript-eslint@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.581 npm warn     node_modules/typescript-eslint
2026-Feb-09 10:12:59.524882 #11 3.615 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn While resolving: @typescript-eslint/parser@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/parser@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn node_modules/@typescript-eslint/parser
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   peer @typescript-eslint/parser@"^8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   1 more (typescript-eslint)
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/parser@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn   node_modules/@typescript-eslint/parser
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn     peer @typescript-eslint/parser@"^8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn     node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.617 npm warn     1 more (typescript-eslint)
2026-Feb-09 10:12:59.524882 #11 3.632 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn While resolving: @typescript-eslint/type-utils@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/type-utils@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn node_modules/@typescript-eslint/type-utils
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn   @typescript-eslint/type-utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/type-utils@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn   node_modules/@typescript-eslint/type-utils
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn     @typescript-eslint/type-utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.633 npm warn     node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn While resolving: @typescript-eslint/utils@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/utils@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn node_modules/@typescript-eslint/utils
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   @typescript-eslint/utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   2 more (@typescript-eslint/type-utils, typescript-eslint)
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from @typescript-eslint/utils@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn   node_modules/@typescript-eslint/utils
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn     @typescript-eslint/utils@"8.54.0" from @typescript-eslint/eslint-plugin@8.54.0
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn     node_modules/@typescript-eslint/eslint-plugin
2026-Feb-09 10:12:59.524882 #11 3.647 npm warn     2 more (@typescript-eslint/type-utils, typescript-eslint)
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn While resolving: eslint-plugin-import@2.32.0
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9" from eslint-plugin-import@2.32.0
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn node_modules/eslint-plugin-import
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   eslint-plugin-import@"^2.32.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   1 more (eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9" from eslint-plugin-import@2.32.0
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn   node_modules/eslint-plugin-import
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn     eslint-plugin-import@"^2.32.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 3.750 npm warn     1 more (eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn While resolving: eslint-plugin-jsx-a11y@6.10.2
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9" from eslint-plugin-jsx-a11y@6.10.2
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn node_modules/eslint-plugin-jsx-a11y
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn   eslint-plugin-jsx-a11y@"^6.10.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9" from eslint-plugin-jsx-a11y@6.10.2
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn   node_modules/eslint-plugin-jsx-a11y
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn     eslint-plugin-jsx-a11y@"^6.10.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 3.884 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn While resolving: eslint-plugin-react@7.37.5
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn node_modules/eslint-plugin-react
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn   eslint-plugin-react@"^7.37.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn   node_modules/eslint-plugin-react
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn     eslint-plugin-react@"^7.37.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 4.045 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn While resolving: eslint-plugin-react-hooks@7.0.1
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn peer eslint@"^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0" from eslint-plugin-react-hooks@7.0.1
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn node_modules/eslint-plugin-react-hooks
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn   eslint-plugin-react-hooks@"^7.0.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn   peer eslint@"^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0" from eslint-plugin-react-hooks@7.0.1
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn   node_modules/eslint-plugin-react-hooks
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn     eslint-plugin-react-hooks@"^7.0.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 4.187 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn ERESOLVE overriding peer dependency
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn While resolving: typescript-eslint@8.54.0
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn Found: eslint@10.0.0
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn   dev eslint@"^10.0.0" from the root project
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn   3 more (@eslint-community/eslint-utils, eslint-config-next, eslint-import-resolver-typescript)
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn Could not resolve dependency:
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn peer eslint@"^8.57.0 || ^9.0.0" from typescript-eslint@8.54.0
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn node_modules/typescript-eslint
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn   typescript-eslint@"^8.46.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn   node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn Conflicting peer dependency: eslint@9.39.2
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn node_modules/eslint
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn   peer eslint@"^8.57.0 || ^9.0.0" from typescript-eslint@8.54.0
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn   node_modules/typescript-eslint
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn     typescript-eslint@"^8.46.0" from eslint-config-next@16.1.6
2026-Feb-09 10:12:59.524882 #11 4.201 npm warn     node_modules/eslint-config-next
2026-Feb-09 10:12:59.524882 #11 5.035 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 5.035 npm warn EBADENGINE   package: '@eslint/config-array@0.23.1',
2026-Feb-09 10:12:59.524882 #11 5.035 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 5.035 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 5.035 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 5.103 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 5.103 npm warn EBADENGINE   package: '@eslint/config-helpers@0.5.2',
2026-Feb-09 10:12:59.524882 #11 5.103 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 5.103 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 5.103 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 5.142 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 5.142 npm warn EBADENGINE   package: '@eslint/core@1.1.0',
2026-Feb-09 10:12:59.524882 #11 5.142 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 5.142 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 5.142 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 5.173 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 5.173 npm warn EBADENGINE   package: '@eslint/object-schema@3.0.1',
2026-Feb-09 10:12:59.524882 #11 5.173 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 5.173 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 5.173 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 5.194 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 5.194 npm warn EBADENGINE   package: '@eslint/plugin-kit@0.6.0',
2026-Feb-09 10:12:59.524882 #11 5.194 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 5.194 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 5.194 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 9.767 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 9.767 npm warn EBADENGINE   package: 'eslint@10.0.0',
2026-Feb-09 10:12:59.524882 #11 9.767 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 9.767 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 9.767 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 10.20 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 10.20 npm warn EBADENGINE   package: 'eslint-scope@9.1.0',
2026-Feb-09 10:12:59.524882 #11 10.20 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 10.20 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 10.20 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 10.25 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 10.25 npm warn EBADENGINE   package: 'eslint-visitor-keys@5.0.0',
2026-Feb-09 10:12:59.524882 #11 10.25 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 10.25 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 10.25 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 10.31 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 10.31 npm warn EBADENGINE   package: 'espree@11.1.0',
2026-Feb-09 10:12:59.524882 #11 10.31 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 10.31 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 10.31 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 10.34 npm warn EBADENGINE Unsupported engine {
2026-Feb-09 10:12:59.524882 #11 10.34 npm warn EBADENGINE   package: 'eslint-visitor-keys@5.0.0',
2026-Feb-09 10:12:59.524882 #11 10.34 npm warn EBADENGINE   required: { node: '^20.19.0 || ^22.13.0 || >=24' },
2026-Feb-09 10:12:59.524882 #11 10.34 npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
2026-Feb-09 10:12:59.524882 #11 10.34 npm warn EBADENGINE }
2026-Feb-09 10:12:59.524882 #11 73.64
2026-Feb-09 10:12:59.524882 #11 73.64 added 601 packages, and audited 602 packages in 1m
2026-Feb-09 10:12:59.524882 #11 73.64
2026-Feb-09 10:12:59.524882 #11 73.64 271 packages are looking for funding
2026-Feb-09 10:12:59.524882 #11 73.64   run `npm fund` for details
2026-Feb-09 10:12:59.524882 #11 73.65
2026-Feb-09 10:12:59.524882 #11 73.65 found 0 vulnerabilities
2026-Feb-09 10:12:59.524882 #11 DONE 75.0s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #12 [stage-0  8/11] COPY . /app/.
2026-Feb-09 10:12:59.524882 #12 DONE 0.8s
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 #13 [stage-0  9/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build
2026-Feb-09 10:12:59.524882 #13 0.841 npm warn config production Use `--omit=dev` instead.
2026-Feb-09 10:12:59.524882 #13 0.969
2026-Feb-09 10:12:59.524882 #13 0.969 > esguvenir-web@1.0.0 build
2026-Feb-09 10:12:59.524882 #13 0.969 > next build
2026-Feb-09 10:12:59.524882 #13 0.969
2026-Feb-09 10:12:59.524882 #13 3.263 ⨯ Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error
2026-Feb-09 10:12:59.524882 #13 3.265
2026-Feb-09 10:12:59.524882 #13 3.269 > Build error occurred
2026-Feb-09 10:12:59.524882 #13 3.278 Error: require() of ES Module /app/node_modules/remark-gfm/index.js from /app/next.config.js not supported.
2026-Feb-09 10:12:59.524882 #13 3.278 Instead change the require of index.js in /app/next.config.js to a dynamic import() which is available in all CommonJS modules.
2026-Feb-09 10:12:59.524882 #13 3.278     at Object.<anonymous> (next.config.js:4:21) {
2026-Feb-09 10:12:59.524882 #13 3.278   code: 'ERR_REQUIRE_ESM'
2026-Feb-09 10:12:59.524882 #13 3.278 }
2026-Feb-09 10:12:59.524882 #13 ERROR: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 1
2026-Feb-09 10:12:59.524882 ------
2026-Feb-09 10:12:59.524882 > [stage-0  9/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build:
2026-Feb-09 10:12:59.524882 0.969 > next build
2026-Feb-09 10:12:59.524882 0.969
2026-Feb-09 10:12:59.524882 3.263 ⨯ Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error
2026-Feb-09 10:12:59.524882 3.265
2026-Feb-09 10:12:59.524882 3.269 > Build error occurred
2026-Feb-09 10:12:59.524882 3.278 Error: require() of ES Module /app/node_modules/remark-gfm/index.js from /app/next.config.js not supported.
2026-Feb-09 10:12:59.524882 3.278 Instead change the require of index.js in /app/next.config.js to a dynamic import() which is available in all CommonJS modules.
2026-Feb-09 10:12:59.524882 3.278     at Object.<anonymous> (next.config.js:4:21) {
2026-Feb-09 10:12:59.524882 3.278   code: 'ERR_REQUIRE_ESM'
2026-Feb-09 10:12:59.524882 3.278 }
2026-Feb-09 10:12:59.524882 ------
2026-Feb-09 10:12:59.524882 
2026-Feb-09 10:12:59.524882 1 warning found (use docker --debug to expand):
2026-Feb-09 10:12:59.524882 - UndefinedVar: Usage of undefined variable '$NIXPACKS_PATH' (line 18)
2026-Feb-09 10:12:59.524882 Dockerfile:24
2026-Feb-09 10:12:59.524882 --------------------
2026-Feb-09 10:12:59.524882 22 |     # build phase
2026-Feb-09 10:12:59.524882 23 |     COPY . /app/.
2026-Feb-09 10:12:59.524882 24 | >>> RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build
2026-Feb-09 10:12:59.524882 25 |
2026-Feb-09 10:12:59.524882 26 |
2026-Feb-09 10:12:59.524882 --------------------
2026-Feb-09 10:12:59.524882 ERROR: failed to build: failed to solve: process "/bin/bash -ol pipefail -c npm run build" did not complete successfully: exit code: 1
2026-Feb-09 10:12:59.524882 exit status 1
2026-Feb-09 10:12:59.565658 [DEBUG] Error type: RuntimeException
2026-Feb-09 10:12:59.620990 [DEBUG] Error code: 0
2026-Feb-09 10:12:59.664528 [DEBUG] Location: /var/www/html/app/Traits/ExecuteRemoteCommand.php:243
2026-Feb-09 10:12:59.709332 [DEBUG] Stack trace (first 5 lines):
2026-Feb-09 10:12:59.757894 [DEBUG] #0 /var/www/html/app/Traits/ExecuteRemoteCommand.php(104): App\Jobs\ApplicationDeploymentJob->executeCommandWithProcess()
2026-Feb-09 10:12:59.809729 [DEBUG] #1 /var/www/html/vendor/laravel/framework/src/Illuminate/Collections/Traits/EnumeratesValues.php(271): App\Jobs\ApplicationDeploymentJob->{closure:App\Traits\ExecuteRemoteCommand::execute_remote_command():71}()
2026-Feb-09 10:12:59.854730 [DEBUG] #2 /var/www/html/app/Traits/ExecuteRemoteCommand.php(71): Illuminate\Support\Collection->each()
2026-Feb-09 10:12:59.904621 [DEBUG] #3 /var/www/html/app/Jobs/ApplicationDeploymentJob.php(3118): App\Jobs\ApplicationDeploymentJob->execute_remote_command()
2026-Feb-09 10:12:59.947343 [DEBUG] #4 /var/www/html/app/Jobs/ApplicationDeploymentJob.php(888): App\Jobs\ApplicationDeploymentJob->build_image()
2026-Feb-09 10:12:59.987080 ========================================
2026-Feb-09 10:13:00.133265 Deployment failed. Removing the new version of your application.
2026-Feb-09 10:13:03.727281 Gracefully shutting down build container: sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:13:06.282236 [DEBUG] [CMD]: docker stop -t 30 sw8o04g48g80wo4k8cw0okcw
2026-Feb-09 10:13:06.282236 [DEBUG] sw8o04g48g80wo4k8cw0okcw