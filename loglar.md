2026-Feb-09 09:10:38.900545 Starting deployment of duyaronur/esguvenir-web:main to localhost.
2026-Feb-09 09:10:39.501701 Preparing container with helper image: ghcr.io/coollabsio/coolify-helper:1.0.12
2026-Feb-09 09:10:39.865781 [DEBUG] [CMD]: docker stop -t 30 fwc04csg8wo884owoscwgcks
2026-Feb-09 09:10:39.865781 [DEBUG] Error response from daemon: No such container: fwc04csg8wo884owoscwgcks
2026-Feb-09 09:10:40.341684 [DEBUG] [CMD]: docker run -d --network coolify --name fwc04csg8wo884owoscwgcks  --rm -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/coollabsio/coolify-helper:1.0.12
2026-Feb-09 09:10:40.341684 [DEBUG] f3d968b3b3d3e654c6fe34694ae4aba85e436b4df1817099adfb7a9fb43a2a95
2026-Feb-09 09:10:46.244998 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'GIT_SSH_COMMAND="ssh -o ConnectTimeout=30 -p 22 -o Port=22 -o LogLevel=ERROR -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" git ls-remote https://x-access-token:<REDACTED>@github.com/duyaronur/esguvenir-web.git refs/heads/main'
2026-Feb-09 09:10:46.244998 [DEBUG] 538998e6bea6c056bfb1024ca6b9184051e88f74	refs/heads/main
2026-Feb-09 09:10:46.754919 Image not found (scwc8ogkwo084s4okw0kgooc:538998e6bea6c056bfb1024ca6b9184051e88f74). Building new image.
2026-Feb-09 09:10:47.497310 ----------------------------------------
2026-Feb-09 09:10:47.526576 Importing duyaronur/esguvenir-web:main (commit sha 538998e6bea6c056bfb1024ca6b9184051e88f74) to /artifacts/fwc04csg8wo884owoscwgcks.
2026-Feb-09 09:10:48.121733 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'git clone --depth=1 --recurse-submodules --shallow-submodules -b 'main' 'https://x-access-token:<REDACTED>@github.com/duyaronur/esguvenir-web.git' '/artifacts/fwc04csg8wo884owoscwgcks' && cd '/artifacts/fwc04csg8wo884owoscwgcks' && if [ -f .gitmodules ]; then git submodule sync && GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" git submodule update --init --recursive --depth=1; fi && cd '/artifacts/fwc04csg8wo884owoscwgcks' && GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" git lfs pull'
2026-Feb-09 09:10:48.121733 [DEBUG] Cloning into '/artifacts/fwc04csg8wo884owoscwgcks'...
2026-Feb-09 09:10:54.598283 [DEBUG] Updating files:  41% (37/90)
2026-Feb-09 09:10:54.698172 [DEBUG] Updating files:  42% (38/90)
2026-Feb-09 09:10:54.757662 [DEBUG] Updating files:  43% (39/90)
2026-Feb-09 09:10:54.860214 [DEBUG] Updating files:  44% (40/90)
2026-Feb-09 09:10:54.929522 [DEBUG] Updating files:  45% (41/90)
2026-Feb-09 09:10:54.959676 [DEBUG] Updating files:  46% (42/90)
2026-Feb-09 09:10:54.967260 [DEBUG] Updating files:  47% (43/90)
Updating files:  48% (44/90)
Updating files:  50% (45/90)
Updating files:  51% (46/90)
Updating files:  52% (47/90)
Updating files:  53% (48/90)
2026-Feb-09 09:10:54.972631 [DEBUG] Updating files:  54% (49/90)
Updating files:  55% (50/90)
Updating files:  56% (51/90)
Updating files:  57% (52/90)
Updating files:  58% (53/90)
2026-Feb-09 09:10:54.981612 [DEBUG] Updating files:  60% (54/90)
Updating files:  61% (55/90)
Updating files:  62% (56/90)
Updating files:  63% (57/90)
Updating files:  64% (58/90)
Updating files:  65% (59/90)
Updating files:  66% (60/90)
2026-Feb-09 09:10:54.989571 [DEBUG] Updating files:  67% (61/90)
Updating files:  68% (62/90)
Updating files:  70% (63/90)
Updating files:  71% (64/90)
Updating files:  72% (65/90)
Updating files:  73% (66/90)
Updating files:  74% (67/90)
Updating files:  75% (68/90)
Updating files:  76% (69/90)
Updating files:  77% (70/90)
2026-Feb-09 09:10:55.000923 [DEBUG] Updating files:  78% (71/90)
Updating files:  80% (72/90)
Updating files:  81% (73/90)
Updating files:  82% (74/90)
Updating files:  83% (75/90)
Updating files:  84% (76/90)
Updating files:  85% (77/90)
Updating files:  86% (78/90)
Updating files:  87% (79/90)
Updating files:  88% (80/90)
Updating files:  90% (81/90)
Updating files:  91% (82/90)
Updating files:  92% (83/90)
Updating files:  93% (84/90)
Updating files:  94% (85/90)
Updating files:  95% (86/90)
Updating files:  96% (87/90)
Updating files:  97% (88/90)
Updating files:  98% (89/90)
Updating files: 100% (90/90)
Updating files: 100% (90/90), done.
2026-Feb-09 09:10:56.747447 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'cd /artifacts/fwc04csg8wo884owoscwgcks && git log -1 538998e6bea6c056bfb1024ca6b9184051e88f74 --pretty=%B'
2026-Feb-09 09:10:56.747447 [DEBUG] feat: optimize logo - use esguvenirlogo.png with Next.js Image component
2026-Feb-09 09:10:56.747447 [DEBUG] - Replace logo.svg with esguvenirlogo.png for better brand identity
2026-Feb-09 09:10:56.747447 [DEBUG] - Add Image optimization with proper width/height for performance
2026-Feb-09 09:10:56.747447 [DEBUG] - Implement hover scale effect on logo (scale-105)
2026-Feb-09 09:10:56.747447 [DEBUG] - Use brightness-0 invert filter for footer logo visibility on dark background
2026-Feb-09 09:10:56.747447 [DEBUG] - Add group hover animations for enhanced UX
2026-Feb-09 09:10:56.747447 [DEBUG] - Remove redundant logo text wrapper in Footer for cleaner layout
2026-Feb-09 09:10:57.350798 Generating nixpacks configuration with: nixpacks plan -f json --env NIXPACKS_NODE_VERSION=22 --env COOLIFY_URL=http://scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_FQDN=scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_BRANCH=main --env COOLIFY_RESOURCE_UUID=scwc8ogkwo084s4okw0kgooc /artifacts/fwc04csg8wo884owoscwgcks
2026-Feb-09 09:10:58.092099 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'nixpacks plan -f json --env NIXPACKS_NODE_VERSION=22 --env COOLIFY_URL=http://scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_FQDN=scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr --env COOLIFY_BRANCH=main --env COOLIFY_RESOURCE_UUID=scwc8ogkwo084s4okw0kgooc /artifacts/fwc04csg8wo884owoscwgcks'
2026-Feb-09 09:10:58.092099 [DEBUG] {
2026-Feb-09 09:10:58.092099 [DEBUG] "providers": [],
2026-Feb-09 09:10:58.092099 [DEBUG] "buildImage": "ghcr.io/railwayapp/nixpacks:ubuntu-1745885067",
2026-Feb-09 09:10:58.092099 [DEBUG] "variables": {
2026-Feb-09 09:10:58.092099 [DEBUG] "CI": "true",
2026-Feb-09 09:10:58.092099 [DEBUG] "COOLIFY_BRANCH": "main",
2026-Feb-09 09:10:58.092099 [DEBUG] "COOLIFY_FQDN": "scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr",
2026-Feb-09 09:10:58.092099 [DEBUG] "COOLIFY_RESOURCE_UUID": "scwc8ogkwo084s4okw0kgooc",
2026-Feb-09 09:10:58.092099 [DEBUG] "COOLIFY_URL": "http://scwc8ogkwo084s4okw0kgooc.onurduyar.com.tr",
2026-Feb-09 09:10:58.092099 [DEBUG] "NIXPACKS_METADATA": "node",
2026-Feb-09 09:10:58.092099 [DEBUG] "NIXPACKS_NODE_VERSION": "22",
2026-Feb-09 09:10:58.092099 [DEBUG] "NODE_ENV": "production",
2026-Feb-09 09:10:58.092099 [DEBUG] "NPM_CONFIG_PRODUCTION": "false"
2026-Feb-09 09:10:58.092099 [DEBUG] },
2026-Feb-09 09:10:58.092099 [DEBUG] "phases": {
2026-Feb-09 09:10:58.092099 [DEBUG] "build": {
2026-Feb-09 09:10:58.092099 [DEBUG] "dependsOn": [
2026-Feb-09 09:10:58.092099 [DEBUG] "install"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "cmds": [
2026-Feb-09 09:10:58.092099 [DEBUG] "npm run build"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "cacheDirectories": [
2026-Feb-09 09:10:58.092099 [DEBUG] ".next/cache",
2026-Feb-09 09:10:58.092099 [DEBUG] "node_modules/.cache"
2026-Feb-09 09:10:58.092099 [DEBUG] ]
2026-Feb-09 09:10:58.092099 [DEBUG] },
2026-Feb-09 09:10:58.092099 [DEBUG] "install": {
2026-Feb-09 09:10:58.092099 [DEBUG] "dependsOn": [
2026-Feb-09 09:10:58.092099 [DEBUG] "setup"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "cmds": [
2026-Feb-09 09:10:58.092099 [DEBUG] "npm ci"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "cacheDirectories": [
2026-Feb-09 09:10:58.092099 [DEBUG] "/root/.npm"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "paths": [
2026-Feb-09 09:10:58.092099 [DEBUG] "/app/node_modules/.bin"
2026-Feb-09 09:10:58.092099 [DEBUG] ]
2026-Feb-09 09:10:58.092099 [DEBUG] },
2026-Feb-09 09:10:58.092099 [DEBUG] "setup": {
2026-Feb-09 09:10:58.092099 [DEBUG] "nixPkgs": [
2026-Feb-09 09:10:58.092099 [DEBUG] "nodejs_22",
2026-Feb-09 09:10:58.092099 [DEBUG] "npm-9_x"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "nixOverlays": [
2026-Feb-09 09:10:58.092099 [DEBUG] "https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz"
2026-Feb-09 09:10:58.092099 [DEBUG] ],
2026-Feb-09 09:10:58.092099 [DEBUG] "nixpkgsArchive": "ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7"
2026-Feb-09 09:10:58.092099 [DEBUG] }
2026-Feb-09 09:10:58.092099 [DEBUG] },
2026-Feb-09 09:10:58.092099 [DEBUG] "start": {
2026-Feb-09 09:10:58.092099 [DEBUG] "cmd": "npm run start"
2026-Feb-09 09:10:58.092099 [DEBUG] }
2026-Feb-09 09:10:58.092099 [DEBUG] }
2026-Feb-09 09:10:58.743146 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'nixpacks detect /artifacts/fwc04csg8wo884owoscwgcks'
2026-Feb-09 09:10:58.743146 [DEBUG] node
2026-Feb-09 09:10:58.784679 Found application type: node.
2026-Feb-09 09:10:58.821608 If you need further customization, please check the documentation of Nixpacks: https://nixpacks.com/docs/providers/node
2026-Feb-09 09:10:58.850451 [DEBUG] Final Nixpacks plan: {
2026-Feb-09 09:10:58.850451 [DEBUG] "providers": [],
2026-Feb-09 09:10:58.850451 [DEBUG] "buildImage": "ghcr.io\/railwayapp\/nixpacks:ubuntu-1745885067",
2026-Feb-09 09:10:58.850451 [DEBUG] "phases": {
2026-Feb-09 09:10:58.850451 [DEBUG] "build": {
2026-Feb-09 09:10:58.850451 [DEBUG] "dependsOn": [
2026-Feb-09 09:10:58.850451 [DEBUG] "install"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "cmds": [
2026-Feb-09 09:10:58.850451 [DEBUG] "npm run build"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "cacheDirectories": [
2026-Feb-09 09:10:58.850451 [DEBUG] ".next\/cache",
2026-Feb-09 09:10:58.850451 [DEBUG] "node_modules\/.cache"
2026-Feb-09 09:10:58.850451 [DEBUG] ]
2026-Feb-09 09:10:58.850451 [DEBUG] },
2026-Feb-09 09:10:58.850451 [DEBUG] "install": {
2026-Feb-09 09:10:58.850451 [DEBUG] "dependsOn": [
2026-Feb-09 09:10:58.850451 [DEBUG] "setup"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "cmds": [
2026-Feb-09 09:10:58.850451 [DEBUG] "npm ci"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "cacheDirectories": [
2026-Feb-09 09:10:58.850451 [DEBUG] "\/root\/.npm"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "paths": [
2026-Feb-09 09:10:58.850451 [DEBUG] "\/app\/node_modules\/.bin"
2026-Feb-09 09:10:58.850451 [DEBUG] ]
2026-Feb-09 09:10:58.850451 [DEBUG] },
2026-Feb-09 09:10:58.850451 [DEBUG] "setup": {
2026-Feb-09 09:10:58.850451 [DEBUG] "nixPkgs": [
2026-Feb-09 09:10:58.850451 [DEBUG] "nodejs_22",
2026-Feb-09 09:10:58.850451 [DEBUG] "npm-9_x"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "nixOverlays": [
2026-Feb-09 09:10:58.850451 [DEBUG] "https:\/\/github.com\/railwayapp\/nix-npm-overlay\/archive\/main.tar.gz"
2026-Feb-09 09:10:58.850451 [DEBUG] ],
2026-Feb-09 09:10:58.850451 [DEBUG] "nixpkgsArchive": "ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7",
2026-Feb-09 09:10:58.850451 [DEBUG] "aptPkgs": [
2026-Feb-09 09:10:58.850451 [DEBUG] "curl",
2026-Feb-09 09:10:58.850451 [DEBUG] "wget"
2026-Feb-09 09:10:58.850451 [DEBUG] ]
2026-Feb-09 09:10:58.850451 [DEBUG] }
2026-Feb-09 09:10:58.850451 [DEBUG] },
2026-Feb-09 09:10:58.850451 [DEBUG] "start": {
2026-Feb-09 09:10:58.850451 [DEBUG] "cmd": "npm run start"
2026-Feb-09 09:10:58.850451 [DEBUG] }
2026-Feb-09 09:10:58.850451 [DEBUG] }
2026-Feb-09 09:11:00.677346 [DEBUG] Creating build-time .env file in /artifacts (outside Docker context).
2026-Feb-09 09:11:01.224250 ----------------------------------------
2026-Feb-09 09:11:01.253871 Building docker image started.
2026-Feb-09 09:11:01.283852 To check the current progress, click on Show Debug Logs.
2026-Feb-09 09:11:02.423799 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'nixpacks build -c /artifacts/thegameplan.json --cache-key 'scwc8ogkwo084s4okw0kgooc' --no-error-without-start -n scwc8ogkwo084s4okw0kgooc:538998e6bea6c056bfb1024ca6b9184051e88f74 /artifacts/fwc04csg8wo884owoscwgcks -o /artifacts/fwc04csg8wo884owoscwgcks'
2026-Feb-09 09:11:02.423799 [DEBUG] 
2026-Feb-09 09:11:02.423799 [DEBUG] ╔══════════════ Nixpacks v1.41.0 ═════════════╗
2026-Feb-09 09:11:02.423799 [DEBUG] ║ setup      │ nodejs_22, npm-9_x, curl, wget ║
2026-Feb-09 09:11:02.423799 [DEBUG] ║─────────────────────────────────────────────║
2026-Feb-09 09:11:02.423799 [DEBUG] ║ install    │ npm ci                         ║
2026-Feb-09 09:11:02.423799 [DEBUG] ║─────────────────────────────────────────────║
2026-Feb-09 09:11:02.423799 [DEBUG] ║ build      │ npm run build                  ║
2026-Feb-09 09:11:02.423799 [DEBUG] ║─────────────────────────────────────────────║
2026-Feb-09 09:11:02.423799 [DEBUG] ║ start      │ npm run start                  ║
2026-Feb-09 09:11:02.423799 [DEBUG] ╚═════════════════════════════════════════════╝
2026-Feb-09 09:11:02.431190 [DEBUG] Saved output to:
2026-Feb-09 09:11:02.431190 [DEBUG] /artifacts/fwc04csg8wo884owoscwgcks
2026-Feb-09 09:11:02.887852 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'cat /artifacts/fwc04csg8wo884owoscwgcks/.nixpacks/Dockerfile'
2026-Feb-09 09:11:02.887852 [DEBUG] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] ENTRYPOINT ["/bin/bash", "-l", "-c"]
2026-Feb-09 09:11:02.887852 [DEBUG] WORKDIR /app/
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
2026-Feb-09 09:11:02.887852 [DEBUG] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
2026-Feb-09 09:11:02.887852 [DEBUG] RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] ARG CI COOLIFY_BRANCH COOLIFY_FQDN COOLIFY_RESOURCE_UUID COOLIFY_URL NIXPACKS_METADATA NIXPACKS_NODE_VERSION NODE_ENV NPM_CONFIG_PRODUCTION
2026-Feb-09 09:11:02.887852 [DEBUG] ENV CI=$CI COOLIFY_BRANCH=$COOLIFY_BRANCH COOLIFY_FQDN=$COOLIFY_FQDN COOLIFY_RESOURCE_UUID=$COOLIFY_RESOURCE_UUID COOLIFY_URL=$COOLIFY_URL NIXPACKS_METADATA=$NIXPACKS_METADATA NIXPACKS_NODE_VERSION=$NIXPACKS_NODE_VERSION NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=$NPM_CONFIG_PRODUCTION
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] # setup phase
2026-Feb-09 09:11:02.887852 [DEBUG] # noop
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] # install phase
2026-Feb-09 09:11:02.887852 [DEBUG] ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
2026-Feb-09 09:11:02.887852 [DEBUG] COPY . /app/.
2026-Feb-09 09:11:02.887852 [DEBUG] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] # build phase
2026-Feb-09 09:11:02.887852 [DEBUG] COPY . /app/.
2026-Feb-09 09:11:02.887852 [DEBUG] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-next/cache,target=/app/.next/cache --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-node_modules/cache,target=/app/node_modules/.cache npm run build
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] RUN printf '\nPATH=/app/node_modules/.bin:$PATH' >> /root/.profile
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] # start
2026-Feb-09 09:11:02.887852 [DEBUG] COPY . /app
2026-Feb-09 09:11:02.887852 [DEBUG] 
2026-Feb-09 09:11:02.887852 [DEBUG] CMD ["npm run start"]
2026-Feb-09 09:11:04.077098 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'cat /artifacts/build.sh'
2026-Feb-09 09:11:04.077098 [DEBUG] cd /artifacts/fwc04csg8wo884owoscwgcks && set -a && source /artifacts/build-time.env && set +a && docker build --add-host coolify:10.0.1.6 --add-host coolify-db:10.0.1.3 --add-host coolify-realtime:10.0.1.4 --add-host coolify-redis:10.0.1.5 --network host -f /artifacts/fwc04csg8wo884owoscwgcks/.nixpacks/Dockerfile --progress plain -t scwc8ogkwo084s4okw0kgooc:538998e6bea6c056bfb1024ca6b9184051e88f74 --build-arg CI --build-arg COOLIFY_BRANCH --build-arg COOLIFY_FQDN --build-arg COOLIFY_RESOURCE_UUID --build-arg COOLIFY_URL --build-arg NIXPACKS_METADATA --build-arg NIXPACKS_NODE_VERSION --build-arg NODE_ENV --build-arg NPM_CONFIG_PRODUCTION --build-arg COOLIFY_BUILD_SECRETS_HASH=8de06c2232e2afae80e85e1472190ab2c238071f6dd809121ee343c5fd3146d6 --build-arg 'COOLIFY_URL' --build-arg 'COOLIFY_FQDN' --build-arg 'COOLIFY_BRANCH' --build-arg 'COOLIFY_RESOURCE_UUID' /artifacts/fwc04csg8wo884owoscwgcks
2026-Feb-09 09:11:05.539074 [DEBUG] [CMD]: docker exec fwc04csg8wo884owoscwgcks bash -c 'bash /artifacts/build.sh'
2026-Feb-09 09:11:05.539074 [DEBUG] #0 building with "default" instance using docker driver
2026-Feb-09 09:11:05.539074 [DEBUG] 
2026-Feb-09 09:11:05.539074 [DEBUG] #1 [internal] load build definition from Dockerfile
2026-Feb-09 09:11:05.539074 [DEBUG] #1 transferring dockerfile: 1.43kB done
2026-Feb-09 09:11:05.539074 [DEBUG] #1 DONE 0.0s
2026-Feb-09 09:11:05.539074 [DEBUG] 
2026-Feb-09 09:11:05.539074 [DEBUG] #2 [internal] load metadata for ghcr.io/railwayapp/nixpacks:ubuntu-1745885067
2026-Feb-09 09:11:08.016555 [DEBUG] #2 DONE 2.6s
2026-Feb-09 09:11:08.133087 [DEBUG] #3 [internal] load .dockerignore
2026-Feb-09 09:11:08.141620 [DEBUG] #3 transferring context: 2B done
2026-Feb-09 09:11:08.141620 [DEBUG] #3 DONE 0.0s
2026-Feb-09 09:11:08.141620 [DEBUG] 
2026-Feb-09 09:11:08.141620 [DEBUG] #4 [stage-0  1/11] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067@sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de
2026-Feb-09 09:11:08.141620 [DEBUG] #4 resolve ghcr.io/railwayapp/nixpacks:ubuntu-1745885067@sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de 0.0s done
2026-Feb-09 09:11:08.141620 [DEBUG] #4 sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de 1.61kB / 1.61kB done
2026-Feb-09 09:11:08.141620 [DEBUG] #4 sha256:98801a2e9c74b1236de01aa97bc99349f700f53f81d3bbab4411e2a8a9dd316d 1.06kB / 1.06kB done
2026-Feb-09 09:11:08.141620 [DEBUG] #4 sha256:75908e6a244aa7c07bd16c59f1a88c832d0735edf545bd28f86d6bee4a5536a0 4.43kB / 4.43kB done
2026-Feb-09 09:11:08.300346 [DEBUG] #4 DONE 0.1s
2026-Feb-09 09:11:08.300346 [DEBUG] 
2026-Feb-09 09:11:08.300346 [DEBUG] #5 [internal] load build context
2026-Feb-09 09:11:08.496530 [DEBUG] #5 ...
2026-Feb-09 09:11:08.496530 [DEBUG] 
2026-Feb-09 09:11:08.496530 [DEBUG] #6 [stage-0  2/11] WORKDIR /app/
2026-Feb-09 09:11:08.496530 [DEBUG] #6 DONE 0.3s
2026-Feb-09 09:11:08.496530 [DEBUG] 
2026-Feb-09 09:11:08.496530 [DEBUG] #5 [internal] load build context
2026-Feb-09 09:11:11.476094 [DEBUG] #5 transferring context: 82.39MB 3.2s done
2026-Feb-09 09:11:11.476094 [DEBUG] #5 DONE 3.2s
2026-Feb-09 09:11:11.512267 [DEBUG] #7 [stage-0  3/11] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
2026-Feb-09 09:11:11.613867 [DEBUG] #7 DONE 0.3s
2026-Feb-09 09:11:11.774352 [DEBUG] #8 [stage-0  4/11] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
2026-Feb-09 09:11:12.352626 [DEBUG] #8 0.735 unpacking 'https://github.com/NixOS/nixpkgs/archive/ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.tar.gz' into the Git cache...
2026-Feb-09 09:13:25.902282 [DEBUG] #8 134.3 unpacking 'https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz' into the Git cache...
2026-Feb-09 09:13:30.309889 [DEBUG] #8 138.7 installing 'ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env'
2026-Feb-09 09:13:33.793889 [DEBUG] #8 142.2 these 5 derivations will be built:
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/cjdjkmr6gy2h8l0cra71whgrvy030kx1-libraries.drv
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/bs6g8vhkfynvlzidhlqbsvnc9wijbaaz-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/zr34yihblp8zqam2fjahiiddvnii8gw0-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2 these 78 paths will be fetched (122.32 MiB download, 581.57 MiB unpacked):
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2   /nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.2 copying path '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.3 copying path '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.3 copying path '/nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.3 copying path '/nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:33.902908 [DEBUG] #8 142.3 copying path '/nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:33.917553 [DEBUG] #8 142.3 copying path '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:34.094887 [DEBUG] #8 142.3 copying path '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:34.094887 [DEBUG] #8 142.3 copying path '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:34.094887 [DEBUG] #8 142.3 copying path '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:34.094887 [DEBUG] #8 142.3 copying path '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:34.284796 [DEBUG] #8 142.7 copying path '/nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:34.432674 [DEBUG] #8 142.8 copying path '/nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.674305 [DEBUG] #8 145.1 copying path '/nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.674305 [DEBUG] #8 145.1 copying path '/nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.1 copying path '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.787479 [DEBUG] #8 145.2 copying path '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.935325 [DEBUG] #8 145.2 copying path '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.935325 [DEBUG] #8 145.2 copying path '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:36.935325 [DEBUG] #8 145.3 copying path '/nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.048675 [DEBUG] #8 145.4 copying path '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.048675 [DEBUG] #8 145.4 copying path '/nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.168556 [DEBUG] #8 145.5 copying path '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.168556 [DEBUG] #8 145.5 copying path '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.168556 [DEBUG] #8 145.6 copying path '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.319198 [DEBUG] #8 145.6 copying path '/nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.319198 [DEBUG] #8 145.6 copying path '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.319198 [DEBUG] #8 145.6 copying path '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.319198 [DEBUG] #8 145.7 copying path '/nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.449555 [DEBUG] #8 145.7 copying path '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.449555 [DEBUG] #8 145.7 copying path '/nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.449555 [DEBUG] #8 145.8 copying path '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.449555 [DEBUG] #8 145.8 copying path '/nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.449555 [DEBUG] #8 145.8 copying path '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.629821 [DEBUG] #8 145.9 copying path '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.673407 [DEBUG] #8 146.1 copying path '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:37.829641 [DEBUG] #8 146.2 copying path '/nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.021176 [DEBUG] #8 146.4 copying path '/nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.146187 [DEBUG] #8 146.4 copying path '/nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.146187 [DEBUG] #8 146.4 copying path '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.146187 [DEBUG] #8 146.4 copying path '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.146187 [DEBUG] #8 146.5 copying path '/nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.371279 [DEBUG] #8 146.6 copying path '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.371279 [DEBUG] #8 146.6 copying path '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.371279 [DEBUG] #8 146.6 copying path '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.623033 [DEBUG] #8 147.0 copying path '/nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.721851 [DEBUG] #8 147.0 copying path '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.721851 [DEBUG] #8 147.0 copying path '/nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.721851 [DEBUG] #8 147.1 copying path '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.856573 [DEBUG] #8 147.2 copying path '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.984847 [DEBUG] #8 147.2 copying path '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.984847 [DEBUG] #8 147.2 copying path '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.984847 [DEBUG] #8 147.3 copying path '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.984847 [DEBUG] #8 147.3 copying path '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:38.984847 [DEBUG] #8 147.4 copying path '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:39.381685 [DEBUG] #8 147.8 copying path '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:40.228348 [DEBUG] #8 148.6 building '/nix/store/cjdjkmr6gy2h8l0cra71whgrvy030kx1-libraries.drv'...
2026-Feb-09 09:13:40.344083 [DEBUG] #8 148.6 copying path '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:40.344083 [DEBUG] #8 148.7 copying path '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:40.941506 [DEBUG] #8 149.3 copying path '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:41.324081 [DEBUG] #8 149.7 building '/nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv'...
2026-Feb-09 09:13:41.980790 [DEBUG] #8 150.4 building '/nix/store/bs6g8vhkfynvlzidhlqbsvnc9wijbaaz-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 09:13:42.172820 [DEBUG] #8 150.6 copying path '/nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:42.507913 [DEBUG] #8 150.9 copying path '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:42.753552 [DEBUG] #8 151.0
2026-Feb-09 09:13:42.753552 [DEBUG] #8 151.0 trying https://registry.npmjs.org/npm/-/npm-9.9.4.tgz
2026-Feb-09 09:13:42.753552 [DEBUG] #8 151.0   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
2026-Feb-09 09:13:42.753552 [DEBUG] #8 151.0                                  Dload  Upload   Total   Spent    Left  Speed
2026-Feb-09 09:13:42.979599 [DEBUG] #8 151.4 100 2648k  100 2648k    0     0  6810k      0 --:--:-- --:--:-- --:--:-- 6825k
2026-Feb-09 09:13:43.213108 [DEBUG] #8 151.6 copying path '/nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:54.838286 [DEBUG] #8 163.2 copying path '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:55.062403 [DEBUG] #8 163.3 copying path '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 09:13:55.233710 [DEBUG] #8 163.6 building '/nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv'...
2026-Feb-09 09:13:55.546418 [DEBUG] #8 163.9 Running phase: unpackPhase
2026-Feb-09 09:13:55.729192 [DEBUG] #8 164.0 unpacking source archive /nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz
2026-Feb-09 09:13:56.401253 [DEBUG] #8 164.8 source root is package
2026-Feb-09 09:13:56.725168 [DEBUG] #8 165.1 setting SOURCE_DATE_EPOCH to timestamp 499162500 of file package/package.json
2026-Feb-09 09:13:56.908070 [DEBUG] #8 165.1 Running phase: installPhase
2026-Feb-09 09:14:01.298831 [DEBUG] #8 169.7 building '/nix/store/zr34yihblp8zqam2fjahiiddvnii8gw0-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 09:14:01.645745 [DEBUG] #8 170.0 created 33 symlinks in user environment
2026-Feb-09 09:14:02.070324 [DEBUG] #8 170.5 building '/nix/store/540448vk4llinjrj8arqg9x2kb5l721g-user-environment.drv'...
2026-Feb-09 09:14:02.728712 [DEBUG] #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 09:14:02.728712 [DEBUG] #8 171.1 removing profile version 1
2026-Feb-09 09:14:02.857121 [DEBUG] #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 09:14:02.857121 [DEBUG] #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.1 finding garbage collector roots...
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.1 removing stale link from '/nix/var/nix/gcroots/auto/lzjbmb2ry0z7lma2fvpqprb12921pnb5' to '/nix/var/nix/profiles/per-user/root/profile-1-link'
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.1 deleting garbage...
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.2 deleting '/nix/store/a9qf4wwhympzs35ncp80r185j6a21w07-user-environment'
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.2 deleting '/nix/store/253kwn1730vnay87xkjgxa2v97w3y079-user-environment.drv'
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.2 deleting '/nix/store/hn5mrh362n52x8wwab9s1v6bgn4n5c94-env-manifest.nix'
2026-Feb-09 09:14:02.868013 [DEBUG] #8 171.2 deleting '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux'
2026-Feb-09 09:14:02.977651 [DEBUG] #8 171.2 deleting '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux'
2026-Feb-09 09:14:02.977651 [DEBUG] #8 171.2 deleting '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0'
2026-Feb-09 09:14:02.977651 [DEBUG] #8 171.2 deleting '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116'
2026-Feb-09 09:14:02.977651 [DEBUG] #8 171.3 deleting '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116'
2026-Feb-09 09:14:02.977651 [DEBUG] #8 171.4 deleting '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1'
2026-Feb-09 09:14:03.187671 [DEBUG] #8 171.4 deleting '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1'
2026-Feb-09 09:14:03.187671 [DEBUG] #8 171.4 deleting '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin'
2026-Feb-09 09:14:03.187671 [DEBUG] #8 171.4 deleting '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0'
2026-Feb-09 09:14:03.199363 [DEBUG] #8 171.4 deleting '/nix/store/lwi59jcfwk2lnrakmm1y5vw85hj3n1bi-source'
2026-Feb-09 09:14:12.630849 [DEBUG] #8 181.0 deleting '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0'
2026-Feb-09 09:14:12.823057 [DEBUG] #8 181.2 deleting '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35'
2026-Feb-09 09:14:12.920066 [DEBUG] #8 181.2 deleting '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin'
2026-Feb-09 09:14:12.920066 [DEBUG] #8 181.2 deleting '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev'
2026-Feb-09 09:14:12.920066 [DEBUG] #8 181.3 deleting '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9'
2026-Feb-09 09:14:12.920066 [DEBUG] #8 181.3 deleting '/nix/store/1c0dv2pdlshjz5kmjd4dfp3c96yncr23-libraries'
2026-Feb-09 09:14:12.920066 [DEBUG] #8 181.3 deleting '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.3 deleting '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.3 deleting '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.3 deleting '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.3 deleting '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.3 deleting '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.3 deleting '/nix/store/m84a5qpv8vgdy0mm1d81x6bajmdax5fj-source'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11'
2026-Feb-09 09:14:13.045987 [DEBUG] #8 181.4 deleting '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params'
2026-Feb-09 09:14:13.199716 [DEBUG] #8 181.4 deleting '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib'
2026-Feb-09 09:14:13.199716 [DEBUG] #8 181.4 deleting '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44'
2026-Feb-09 09:14:13.199716 [DEBUG] #8 181.4 deleting '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12'
2026-Feb-09 09:14:13.238868 [DEBUG] #8 181.6 deleting '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man'
2026-Feb-09 09:14:13.414120 [DEBUG] #8 181.6 deleting '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0'
2026-Feb-09 09:14:13.414120 [DEBUG] #8 181.7 deleting unused links...
2026-Feb-09 09:14:25.865663 [DEBUG] #8 194.3 note: currently hard linking saves 3.00 MiB
2026-Feb-09 09:14:26.015981 [DEBUG] #8 194.4 61 store paths deleted, 559.41 MiB freed
2026-Feb-09 09:14:26.237220 [DEBUG] #8 DONE 194.6s
2026-Feb-09 09:14:26.402694 [DEBUG] #9 [stage-0  5/11] RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget
2026-Feb-09 09:14:27.048022 [DEBUG] #9 0.800 Get:1 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
2026-Feb-09 09:14:27.194218 [DEBUG] #9 0.800 Get:2 http://archive.ubuntu.com/ubuntu noble InRelease [256 kB]
2026-Feb-09 09:14:27.347208 [DEBUG] #9 1.104 Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
2026-Feb-09 09:14:27.581353 [DEBUG] #9 1.189 Get:4 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
2026-Feb-09 09:14:27.672074 [DEBUG] #9 1.422 Get:5 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1199 kB]
2026-Feb-09 09:14:28.004135 [DEBUG] #9 1.761 Get:6 http://archive.ubuntu.com/ubuntu noble/multiverse amd64 Packages [331 kB]
2026-Feb-09 09:14:28.121475 [DEBUG] #9 1.764 Get:7 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [3061 kB]
2026-Feb-09 09:14:28.121475 [DEBUG] #9 1.879 Get:8 http://archive.ubuntu.com/ubuntu noble/main amd64 Packages [1808 kB]
2026-Feb-09 09:14:28.278064 [DEBUG] #9 1.904 Get:9 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [34.8 kB]
2026-Feb-09 09:14:28.278064 [DEBUG] #9 1.918 Get:10 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1802 kB]
2026-Feb-09 09:14:28.278064 [DEBUG] #9 2.035 Get:11 http://archive.ubuntu.com/ubuntu noble/restricted amd64 Packages [117 kB]
2026-Feb-09 09:14:28.434353 [DEBUG] #9 2.040 Get:12 http://archive.ubuntu.com/ubuntu noble/universe amd64 Packages [19.3 MB]
2026-Feb-09 09:14:28.743340 [DEBUG] #9 2.499 Get:13 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [2198 kB]
2026-Feb-09 09:14:28.762323 [DEBUG] 
2026-Feb-09 09:14:28.878276 [DEBUG] #9 2.537 Get:14 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1977 kB]
2026-Feb-09 09:14:28.878276 [DEBUG] #9 2.575 Get:15 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [3280 kB]
2026-Feb-09 09:14:28.878276 [DEBUG] #9 2.633 Get:16 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [38.1 kB]
2026-Feb-09 09:14:29.036939 [DEBUG] #9 2.636 Get:17 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Packages [49.5 kB]
2026-Feb-09 09:14:29.036939 [DEBUG] #9 2.642 Get:18 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [34.6 kB]
2026-Feb-09 09:14:31.933394 [DEBUG] #9 5.690 Fetched 35.9 MB in 5s (7124 kB/s)
2026-Feb-09 09:14:31.933394 [DEBUG] #9 5.690 Reading package lists...
2026-Feb-09 09:14:34.708182 [DEBUG] 
2026-Feb-09 09:14:34.890686 [DEBUG] #9 8.644 Reading package lists...
2026-Feb-09 09:14:38.489807 [DEBUG] 
2026-Feb-09 09:14:38.720742 [DEBUG] #9 12.32 Building dependency tree...
2026-Feb-09 09:14:39.300491 [DEBUG] #9 13.06 Reading state information...
2026-Feb-09 09:14:39.453213 [DEBUG] 
2026-Feb-09 09:14:40.489655 [DEBUG] #9 14.24 curl is already the newest version (8.5.0-2ubuntu10.6).
2026-Feb-09 09:14:40.489655 [DEBUG] #9 14.24 The following NEW packages will be installed:
2026-Feb-09 09:14:40.489655 [DEBUG] #9 14.24   wget
2026-Feb-09 09:14:40.741116 [DEBUG] #9 14.50 0 upgraded, 1 newly installed, 0 to remove and 42 not upgraded.
2026-Feb-09 09:14:40.741116 [DEBUG] #9 14.50 Need to get 334 kB of archives.
2026-Feb-09 09:14:40.741116 [DEBUG] #9 14.50 After this operation, 938 kB of additional disk space will be used.
2026-Feb-09 09:14:40.741116 [DEBUG] #9 14.50 Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 wget amd64 1.21.4-1ubuntu4.1 [334 kB]
2026-Feb-09 09:14:41.635119 [DEBUG] #9 15.39 debconf: delaying package configuration, since apt-utils is not installed
2026-Feb-09 09:14:41.786764 [DEBUG] #9 15.54 Fetched 334 kB in 0s (786 kB/s)
2026-Feb-09 09:14:41.891482 [DEBUG] #9 15.62 Selecting previously unselected package wget.
2026-Feb-09 09:14:41.891482 [DEBUG] #9 15.62 (Reading database ... 
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
2026-Feb-09 09:14:42.092072 [DEBUG] (Reading database ... 85%
(Reading database ... 90%
(Reading database ... 95%
(Reading database ... 100%
(Reading database ... 9511 files and directories currently installed.)
2026-Feb-09 09:14:42.092072 [DEBUG] #9 15.69 Preparing to unpack .../wget_1.21.4-1ubuntu4.1_amd64.deb ...
2026-Feb-09 09:14:42.092072 [DEBUG] #9 15.70 Unpacking wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 09:14:42.126894 [DEBUG] #9 15.88 Setting up wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 09:14:42.419710 [DEBUG] #9 DONE 16.2s
2026-Feb-09 09:14:42.572676 [DEBUG] #10 [stage-0  6/11] COPY . /app/.
2026-Feb-09 09:14:43.278099 [DEBUG] #10 DONE 0.9s
2026-Feb-09 09:14:43.431045 [DEBUG] #11 [stage-0  7/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 09:14:44.165486 [DEBUG] #11 0.884 npm warn config production Use `--omit=dev` instead.
2026-Feb-09 09:15:02.699446 [DEBUG] #11 19.42 npm error code EUSAGE
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. Please update your lock file with `npm install` before continuing.
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Invalid: lock file's picomatch@2.3.1 does not satisfy picomatch@4.0.3
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Missing: picomatch@2.3.1 from lock file
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Missing: picomatch@2.3.1 from lock file
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Missing: picomatch@2.3.1 from lock file
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Clean install a project
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Usage:
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error npm ci
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Options:
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [--no-bin-links] [--no-fund] [--dry-run]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error [-ws|--workspaces] [--include-workspace-root] [--install-links]
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error aliases: clean-install, ic, install-clean, isntall-clean
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error Run "npm help ci" for more info
2026-Feb-09 09:15:02.852822 [DEBUG] #11 19.42 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-02-09T09_14_43_963Z-debug-0.log
2026-Feb-09 09:15:02.852822 [DEBUG] #11 ERROR: process "/bin/bash -ol pipefail -c npm ci" did not complete successfully: exit code: 1
2026-Feb-09 09:15:02.958084 [DEBUG] ------
2026-Feb-09 09:15:02.958084 [DEBUG] > [stage-0  7/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci:
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error [--no-bin-links] [--no-fund] [--dry-run]
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error [-ws|--workspaces] [--include-workspace-root] [--install-links]
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error aliases: clean-install, ic, install-clean, isntall-clean
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error Run "npm help ci" for more info
2026-Feb-09 09:15:02.958084 [DEBUG] 19.42 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-02-09T09_14_43_963Z-debug-0.log
2026-Feb-09 09:15:02.958084 [DEBUG] ------
2026-Feb-09 09:15:02.958084 [DEBUG] 
2026-Feb-09 09:15:02.958084 [DEBUG] 1 warning found (use docker --debug to expand):
2026-Feb-09 09:15:02.958084 [DEBUG] - UndefinedVar: Usage of undefined variable '$NIXPACKS_PATH' (line 18)
2026-Feb-09 09:15:02.982198 [DEBUG] Dockerfile:20
2026-Feb-09 09:15:02.982198 [DEBUG] --------------------
2026-Feb-09 09:15:02.982198 [DEBUG] 18 |     ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
2026-Feb-09 09:15:02.982198 [DEBUG] 19 |     COPY . /app/.
2026-Feb-09 09:15:02.982198 [DEBUG] 20 | >>> RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 09:15:02.982198 [DEBUG] 21 |
2026-Feb-09 09:15:02.982198 [DEBUG] 22 |     # build phase
2026-Feb-09 09:15:02.982198 [DEBUG] --------------------
2026-Feb-09 09:15:02.982198 [DEBUG] ERROR: failed to build: failed to solve: process "/bin/bash -ol pipefail -c npm ci" did not complete successfully: exit code: 1
2026-Feb-09 09:15:03.000272 [DEBUG] exit status 1
2026-Feb-09 09:15:03.189861 ========================================
2026-Feb-09 09:15:03.238051 Deployment failed: Command execution failed (exit code 1): docker exec fwc04csg8wo884owoscwgcks bash -c 'bash /artifacts/build.sh'
2026-Feb-09 09:15:03.238051 Error: #0 building with "default" instance using docker driver
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #1 [internal] load build definition from Dockerfile
2026-Feb-09 09:15:03.238051 #1 transferring dockerfile: 1.43kB done
2026-Feb-09 09:15:03.238051 #1 DONE 0.0s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #2 [internal] load metadata for ghcr.io/railwayapp/nixpacks:ubuntu-1745885067
2026-Feb-09 09:15:03.238051 #2 DONE 2.6s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #3 [internal] load .dockerignore
2026-Feb-09 09:15:03.238051 #3 transferring context: 2B done
2026-Feb-09 09:15:03.238051 #3 DONE 0.0s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #4 [stage-0  1/11] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067@sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de
2026-Feb-09 09:15:03.238051 #4 resolve ghcr.io/railwayapp/nixpacks:ubuntu-1745885067@sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de 0.0s done
2026-Feb-09 09:15:03.238051 #4 sha256:d45c89d80e13d7ad0fd555b5130f22a866d9dd10e861f589932303ef2314c7de 1.61kB / 1.61kB done
2026-Feb-09 09:15:03.238051 #4 sha256:98801a2e9c74b1236de01aa97bc99349f700f53f81d3bbab4411e2a8a9dd316d 1.06kB / 1.06kB done
2026-Feb-09 09:15:03.238051 #4 sha256:75908e6a244aa7c07bd16c59f1a88c832d0735edf545bd28f86d6bee4a5536a0 4.43kB / 4.43kB done
2026-Feb-09 09:15:03.238051 #4 DONE 0.1s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #5 [internal] load build context
2026-Feb-09 09:15:03.238051 #5 ...
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #6 [stage-0  2/11] WORKDIR /app/
2026-Feb-09 09:15:03.238051 #6 DONE 0.3s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #5 [internal] load build context
2026-Feb-09 09:15:03.238051 #5 transferring context: 82.39MB 3.2s done
2026-Feb-09 09:15:03.238051 #5 DONE 3.2s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #7 [stage-0  3/11] COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
2026-Feb-09 09:15:03.238051 #7 DONE 0.3s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #8 [stage-0  4/11] RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
2026-Feb-09 09:15:03.238051 #8 0.735 unpacking 'https://github.com/NixOS/nixpkgs/archive/ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.tar.gz' into the Git cache...
2026-Feb-09 09:15:03.238051 #8 134.3 unpacking 'https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz' into the Git cache...
2026-Feb-09 09:15:03.238051 #8 138.7 installing 'ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env'
2026-Feb-09 09:15:03.238051 #8 142.2 these 5 derivations will be built:
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/cjdjkmr6gy2h8l0cra71whgrvy030kx1-libraries.drv
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/bs6g8vhkfynvlzidhlqbsvnc9wijbaaz-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/zr34yihblp8zqam2fjahiiddvnii8gw0-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv
2026-Feb-09 09:15:03.238051 #8 142.2 these 78 paths will be fetched (122.32 MiB download, 581.57 MiB unpacked):
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1
2026-Feb-09 09:15:03.238051 #8 142.2   /nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev
2026-Feb-09 09:15:03.238051 #8 142.2 copying path '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/17v0ywnr3akp85pvdi56gwl99ljv95kx-gcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/acfkqzj5qrqs88a4a6ixnybbjxja663d-xgcc-14-20241116-libgcc' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/xcqcgqazykf6s7fsn08k0blnh0wisdcl-libunistring-1.3' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.3 copying path '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.7 copying path '/nix/store/34z2792zyd4ayl5186vx0s98ckdaccz9-libidn2-2.3.7' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 142.8 copying path '/nix/store/65h17wjrrlsj2rj540igylrx7fqcd6vq-glibc-2.40-36' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/a9jgnlhkjkxav6qrc3rzg2q84pkl2wvr-attr-2.5.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/5mh7kaj2fyv8mk4sfq1brwxgc02884wi-bash-5.2p37' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/bpq1s72cw9qb2fs8mnmlw6hn2c7iy0ss-gcc-14-20241116-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/r9ac2hwnmb0nxwsrvr6gi9wsqf2whfqj-libuv-1.49.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/h1ydpxkw9qhjdxjpic1pdc2nirggyy6f-openssl-3.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.1 copying path '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.2 copying path '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.2 copying path '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.2 copying path '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.3 copying path '/nix/store/cqlaa2xf6lslnizyj9xqa8j0ii1yqw0x-zlib-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.4 copying path '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.4 copying path '/nix/store/cf7gkacyxmm66lwl5nj6j6yykbrg4q5c-acl-2.3.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.5 copying path '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.5 copying path '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.6 copying path '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.6 copying path '/nix/store/ll14czvpxglf6nnwmmrmygplm830fvlv-libuv-1.49.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.6 copying path '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.6 copying path '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.7 copying path '/nix/store/dj96qp9vps02l3n8xgc2vallqa9rhafb-sqlite-3.47.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.7 copying path '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.7 copying path '/nix/store/yc39wvfz87i0bl8r6vnhq48n6clbx2pb-sqlite-3.47.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.8 copying path '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.8 copying path '/nix/store/1lggwqzapn5mn49l9zy4h566ysv9kzdb-zlib-1.3.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.8 copying path '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 145.9 copying path '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.1 copying path '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.2 copying path '/nix/store/i47d0rzbbnihcxkcaj48jgii5pj58djc-sqlite-3.47.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.4 copying path '/nix/store/a2byxfv4lc8f2g5xfzw8cz5q8k05wi29-gmp-with-cxx-6.3.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.4 copying path '/nix/store/wwipgdqb4p2fr46kmw9c5wlk799kbl68-icu4c-74.2' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.4 copying path '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.4 copying path '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.5 copying path '/nix/store/lygl27c44xv73kx1spskcgvzwq7z337c-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.6 copying path '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.6 copying path '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 146.6 copying path '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.0 copying path '/nix/store/4s9rah4cwaxflicsk5cndnknqlk9n4p3-coreutils-9.5' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.0 copying path '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.0 copying path '/nix/store/pp2zf8bdgyz60ds8vcshk2603gcjgp72-openssl-3.3.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.1 copying path '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.2 copying path '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.2 copying path '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.2 copying path '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.3 copying path '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.3 copying path '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.4 copying path '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 147.8 copying path '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 148.6 building '/nix/store/cjdjkmr6gy2h8l0cra71whgrvy030kx1-libraries.drv'...
2026-Feb-09 09:15:03.238051 #8 148.6 copying path '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 148.7 copying path '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 149.3 copying path '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 149.7 building '/nix/store/6vy68gykpxfphbmmyd59ya88xvrwvvaa-npm-9.9.4.tgz.drv'...
2026-Feb-09 09:15:03.238051 #8 150.4 building '/nix/store/bs6g8vhkfynvlzidhlqbsvnc9wijbaaz-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 09:15:03.238051 #8 150.6 copying path '/nix/store/m8w3mf0i4862q22bxad0wspkgdy4jnkk-icu4c-74.2-dev' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 150.9 copying path '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 151.0
2026-Feb-09 09:15:03.238051 #8 151.0 trying https://registry.npmjs.org/npm/-/npm-9.9.4.tgz
2026-Feb-09 09:15:03.238051 #8 151.0   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
2026-Feb-09 09:15:03.238051 #8 151.0                                  Dload  Upload   Total   Spent    Left  Speed
2026-Feb-09 09:15:03.238051 #8 151.4 100 2648k  100 2648k    0     0  6810k      0 --:--:-- --:--:-- --:--:-- 6825k
2026-Feb-09 09:15:03.238051 #8 151.6 copying path '/nix/store/fkyp1bm5gll9adnfcj92snyym524mdrj-nodejs-22.11.0' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 163.2 copying path '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 163.3 copying path '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux' from 'https://cache.nixos.org'...
2026-Feb-09 09:15:03.238051 #8 163.6 building '/nix/store/w9h0z1lhfwxc0m38f3w5brfdqrzm4wyj-npm.drv'...
2026-Feb-09 09:15:03.238051 #8 163.9 Running phase: unpackPhase
2026-Feb-09 09:15:03.238051 #8 164.0 unpacking source archive /nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz
2026-Feb-09 09:15:03.238051 #8 164.8 source root is package
2026-Feb-09 09:15:03.238051 #8 165.1 setting SOURCE_DATE_EPOCH to timestamp 499162500 of file package/package.json
2026-Feb-09 09:15:03.238051 #8 165.1 Running phase: installPhase
2026-Feb-09 09:15:03.238051 #8 169.7 building '/nix/store/zr34yihblp8zqam2fjahiiddvnii8gw0-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7-env.drv'...
2026-Feb-09 09:15:03.238051 #8 170.0 created 33 symlinks in user environment
2026-Feb-09 09:15:03.238051 #8 170.5 building '/nix/store/540448vk4llinjrj8arqg9x2kb5l721g-user-environment.drv'...
2026-Feb-09 09:15:03.238051 #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 09:15:03.238051 #8 171.1 removing profile version 1
2026-Feb-09 09:15:03.238051 #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 09:15:03.238051 #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/profile
2026-Feb-09 09:15:03.238051 #8 171.1 removing old generations of profile /nix/var/nix/profiles/per-user/root/channels
2026-Feb-09 09:15:03.238051 #8 171.1 finding garbage collector roots...
2026-Feb-09 09:15:03.238051 #8 171.1 removing stale link from '/nix/var/nix/gcroots/auto/lzjbmb2ry0z7lma2fvpqprb12921pnb5' to '/nix/var/nix/profiles/per-user/root/profile-1-link'
2026-Feb-09 09:15:03.238051 #8 171.1 deleting garbage...
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/a9qf4wwhympzs35ncp80r185j6a21w07-user-environment'
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/253kwn1730vnay87xkjgxa2v97w3y079-user-environment.drv'
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/hn5mrh362n52x8wwab9s1v6bgn4n5c94-env-manifest.nix'
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/d0gfdcag8bxzvg7ww4s7px4lf8sxisyx-stdenv-linux'
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/4ig84cyqi6qy4n0sanrbzsw1ixa497jx-stdenv-linux'
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/srfxqk119fijwnprgsqvn68ys9kiw0bn-patchelf-0.15.0'
2026-Feb-09 09:15:03.238051 #8 171.2 deleting '/nix/store/xcn9p4xxfbvlkpah7pwchpav4ab9d135-gcc-wrapper-14-20241116'
2026-Feb-09 09:15:03.238051 #8 171.3 deleting '/nix/store/l89iqc7am6i60y8vk507zwrzxf0wcd3v-gcc-14-20241116'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/2a3anh8vl3fcgk0fvaravlimrqawawza-libmpc-1.3.1'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/qs22aazzrdd4dnjf9vffl0n31hvls43h-mpfr-4.2.1'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/mglixp03lsp0w986svwdvm7vcy17rdax-bzip2-1.0.8-bin'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/ivl2v8rgg7qh1jkj5pwpqycax3rc2hnl-bzip2-1.0.8'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/5f5linrxzhhb3mrclkwdpm9bd8ygldna-curl-8.11.0-dev'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/b56mswksrql15knpb1bnhv3ysif340kd-krb5-1.21.3-dev'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/milph81dilrh96isyivh5n50agpx39k2-krb5-1.21.3'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/5yja5dpk2qw1v5mbfbl2d7klcdfrh90w-patch-2.7.6'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/74h4z8k82pmp24xryflv4lxkz8jlpqqd-ed-1.20.2'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/fv7gpnvg922frkh81w5hkdhpz0nw3iiz-mirrors-list'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/d7zhcrcc7q3yfbm3qkqpgc3daq82spwi-libssh2-1.11.1-dev'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/srcmmqi8kxjfygd0hyy42c8hv6cws83b-binutils-wrapper-2.43.1'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/xmbv8s4p4i4dbxgkgdrdfb0ym25wh6gk-isl-0.20'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/kryrg7ds05iwcmy81amavk8w13y4lxbs-gmp-6.3.0'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/00g69vw7c9lycy63h45ximy0wmzqx5y6-diffutils-3.10'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/a3c47r5z1q2c4rz0kvq8hlilkhx2s718-gawk-5.3.1'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/dz97fw51rm5bl9kz1vg0haj1j1a7r1mr-nghttp2-1.64.0-dev'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/grixvx878884hy8x3xs0c0s1i00j632k-nghttp2-1.64.0'
2026-Feb-09 09:15:03.238051 #8 171.4 deleting '/nix/store/lwi59jcfwk2lnrakmm1y5vw85hj3n1bi-source'
2026-Feb-09 09:15:03.238051 #8 181.0 deleting '/nix/store/1i003ijlh9i0mzp6alqby5hg3090pjdx-perl-5.40.0'
2026-Feb-09 09:15:03.238051 #8 181.2 deleting '/nix/store/9cwwj1c9csmc85l2cqzs3h9hbf1vwl6c-gnutar-1.35'
2026-Feb-09 09:15:03.238051 #8 181.2 deleting '/nix/store/h18s640fnhhj2qdh5vivcfbxvz377srg-xz-5.6.3-bin'
2026-Feb-09 09:15:03.238051 #8 181.2 deleting '/nix/store/kj8hbqx4ds9qm9mq7hyikxyfwwg13kzj-glibc-2.40-36-dev'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/abm77lnrkrkb58z6xp1qwjcr1xgkcfwm-gnused-4.9'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/1c0dv2pdlshjz5kmjd4dfp3c96yncr23-libraries'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/1c6bmxrrhm8bd26ai2rjqld2yyjrxhds-glibc-2.40-36-bin'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/kqm7wpqkzc4bwjlzqizcbz0mgkj06a9x-openssl-3.3.2-dev'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/fp6cjl1zcmm6mawsnrb5yak1wkz2ma8l-gnumake-4.4.1'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/c4rj90r2m89rxs64hmm857mipwjhig5d-file-5.46'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/c2njy6bv84kw1i4bjf5k5gn7gz8hn57n-xz-5.6.3'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/nvvj6sk0k6px48436drlblf4gafgbvzr-gzip-1.13'
2026-Feb-09 09:15:03.238051 #8 181.3 deleting '/nix/store/m84a5qpv8vgdy0mm1d81x6bajmdax5fj-source'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/p123cq20klajcl9hj8jnkjip5nw6awhz-curl-8.11.0-bin'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/pkc7mb4a4qvyz73srkqh4mwl70w98dsv-curl-8.11.0'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/v9c1s50x7magpiqgycxxkn36avzbcg0g-krb5-1.21.3-lib'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/wf5zj2gbib3gjqllkabxaw4dh0gzcla3-builder.pl'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/j7p46r8v9gcpbxx89pbqlh61zhd33gzv-binutils-2.43.1'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/df2a8k58k00f2dh2x930dg6xs6g6mliv-binutils-2.43.1-lib'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/fkd1ma3nify8r9wp463yg5rqz9hdcyf1-npm-9.9.4.tgz'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/qq5q0alyzywdazhmybi7m69akz0ppk05-openssl-3.3.2-bin'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/2wh1gqyzf5xsvxpdz2k0bxiz583wwq29-keyutils-1.6.3-lib'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/8675pnfr4fqnwv4pzjl67hdwls4q13aa-libssh2-1.11.1'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/9l9n7a0v4aibcz0sgd0crs209an9p7dz-openssl-3.3.2'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/d29r1bdmlvwmj52apgcdxfl1mm9c5782-update-autotools-gnu-config-scripts-hook'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/1m67ipsk39xvhyqrxnzv2m2p48pil8kl-gnu-config-2024-01-01'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/6cr0spsvymmrp1hj5n0kbaxw55w1lqyp-libxcrypt-4.4.36'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/aap6cq56amx4mzbyxp2wpgsf1kqjcr1f-gnugrep-3.11'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/qbry6090vlr9ar33kdmmbq2p5apzbga8-expand-response-params'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/qcghigzrz56vczwlzg9c02vbs6zr9jkz-nghttp2-1.64.0-lib'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/3j1p598fivxs69wx3a657ysv3rw8k06l-pcre2-10.44'
2026-Feb-09 09:15:03.238051 #8 181.4 deleting '/nix/store/pc74azbkr19rkd5bjalq2xwx86cj3cga-linux-headers-6.12'
2026-Feb-09 09:15:03.238051 #8 181.6 deleting '/nix/store/agvks3qmzja0yj54szi3vja6vx3cwkkw-curl-8.11.0-man'
2026-Feb-09 09:15:03.238051 #8 181.6 deleting '/nix/store/jqrz1vq5nz4lnv9pqzydj0ir58wbjfy1-findutils-4.10.0'
2026-Feb-09 09:15:03.238051 #8 181.7 deleting unused links...
2026-Feb-09 09:15:03.238051 #8 194.3 note: currently hard linking saves 3.00 MiB
2026-Feb-09 09:15:03.238051 #8 194.4 61 store paths deleted, 559.41 MiB freed
2026-Feb-09 09:15:03.238051 #8 DONE 194.6s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #9 [stage-0  5/11] RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget
2026-Feb-09 09:15:03.238051 #9 0.800 Get:1 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
2026-Feb-09 09:15:03.238051 #9 0.800 Get:2 http://archive.ubuntu.com/ubuntu noble InRelease [256 kB]
2026-Feb-09 09:15:03.238051 #9 1.104 Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
2026-Feb-09 09:15:03.238051 #9 1.189 Get:4 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
2026-Feb-09 09:15:03.238051 #9 1.422 Get:5 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1199 kB]
2026-Feb-09 09:15:03.238051 #9 1.761 Get:6 http://archive.ubuntu.com/ubuntu noble/multiverse amd64 Packages [331 kB]
2026-Feb-09 09:15:03.238051 #9 1.764 Get:7 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [3061 kB]
2026-Feb-09 09:15:03.238051 #9 1.879 Get:8 http://archive.ubuntu.com/ubuntu noble/main amd64 Packages [1808 kB]
2026-Feb-09 09:15:03.238051 #9 1.904 Get:9 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [34.8 kB]
2026-Feb-09 09:15:03.238051 #9 1.918 Get:10 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1802 kB]
2026-Feb-09 09:15:03.238051 #9 2.035 Get:11 http://archive.ubuntu.com/ubuntu noble/restricted amd64 Packages [117 kB]
2026-Feb-09 09:15:03.238051 #9 2.040 Get:12 http://archive.ubuntu.com/ubuntu noble/universe amd64 Packages [19.3 MB]
2026-Feb-09 09:15:03.238051 #9 2.499 Get:13 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [2198 kB]
2026-Feb-09 09:15:03.238051 #9 2.537 Get:14 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1977 kB]
2026-Feb-09 09:15:03.238051 #9 2.575 Get:15 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [3280 kB]
2026-Feb-09 09:15:03.238051 #9 2.633 Get:16 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [38.1 kB]
2026-Feb-09 09:15:03.238051 #9 2.636 Get:17 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Packages [49.5 kB]
2026-Feb-09 09:15:03.238051 #9 2.642 Get:18 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [34.6 kB]
2026-Feb-09 09:15:03.238051 #9 5.690 Fetched 35.9 MB in 5s (7124 kB/s)
2026-Feb-09 09:15:03.238051 #9 5.690 Reading package lists...
2026-Feb-09 09:15:03.238051 #9 8.644 Reading package lists...
2026-Feb-09 09:15:03.238051 #9 12.32 Building dependency tree...
2026-Feb-09 09:15:03.238051 #9 13.06 Reading state information...
2026-Feb-09 09:15:03.238051 #9 14.24 curl is already the newest version (8.5.0-2ubuntu10.6).
2026-Feb-09 09:15:03.238051 #9 14.24 The following NEW packages will be installed:
2026-Feb-09 09:15:03.238051 #9 14.24   wget
2026-Feb-09 09:15:03.238051 #9 14.50 0 upgraded, 1 newly installed, 0 to remove and 42 not upgraded.
2026-Feb-09 09:15:03.238051 #9 14.50 Need to get 334 kB of archives.
2026-Feb-09 09:15:03.238051 #9 14.50 After this operation, 938 kB of additional disk space will be used.
2026-Feb-09 09:15:03.238051 #9 14.50 Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 wget amd64 1.21.4-1ubuntu4.1 [334 kB]
2026-Feb-09 09:15:03.238051 #9 15.39 debconf: delaying package configuration, since apt-utils is not installed
2026-Feb-09 09:15:03.238051 #9 15.54 Fetched 334 kB in 0s (786 kB/s)
2026-Feb-09 09:15:03.238051 #9 15.62 Selecting previously unselected package wget.
2026-Feb-09 09:15:03.238051 #9 15.62 (Reading database ... 
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
2026-Feb-09 09:15:03.238051 #9 15.69 Preparing to unpack .../wget_1.21.4-1ubuntu4.1_amd64.deb ...
2026-Feb-09 09:15:03.238051 #9 15.70 Unpacking wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 09:15:03.238051 #9 15.88 Setting up wget (1.21.4-1ubuntu4.1) ...
2026-Feb-09 09:15:03.238051 #9 DONE 16.2s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #10 [stage-0  6/11] COPY . /app/.
2026-Feb-09 09:15:03.238051 #10 DONE 0.9s
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 #11 [stage-0  7/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 09:15:03.238051 #11 0.884 npm warn config production Use `--omit=dev` instead.
2026-Feb-09 09:15:03.238051 #11 19.42 npm error code EUSAGE
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. Please update your lock file with `npm install` before continuing.
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Invalid: lock file's picomatch@2.3.1 does not satisfy picomatch@4.0.3
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Missing: picomatch@2.3.1 from lock file
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Missing: picomatch@2.3.1 from lock file
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Missing: picomatch@2.3.1 from lock file
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Clean install a project
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Usage:
2026-Feb-09 09:15:03.238051 #11 19.42 npm error npm ci
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Options:
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [--no-bin-links] [--no-fund] [--dry-run]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error [-ws|--workspaces] [--include-workspace-root] [--install-links]
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error aliases: clean-install, ic, install-clean, isntall-clean
2026-Feb-09 09:15:03.238051 #11 19.42 npm error
2026-Feb-09 09:15:03.238051 #11 19.42 npm error Run "npm help ci" for more info
2026-Feb-09 09:15:03.238051 #11 19.42 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-02-09T09_14_43_963Z-debug-0.log
2026-Feb-09 09:15:03.238051 #11 ERROR: process "/bin/bash -ol pipefail -c npm ci" did not complete successfully: exit code: 1
2026-Feb-09 09:15:03.238051 ------
2026-Feb-09 09:15:03.238051 > [stage-0  7/11] RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci:
2026-Feb-09 09:15:03.238051 19.42 npm error [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
2026-Feb-09 09:15:03.238051 19.42 npm error [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
2026-Feb-09 09:15:03.238051 19.42 npm error [--no-bin-links] [--no-fund] [--dry-run]
2026-Feb-09 09:15:03.238051 19.42 npm error [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
2026-Feb-09 09:15:03.238051 19.42 npm error [-ws|--workspaces] [--include-workspace-root] [--install-links]
2026-Feb-09 09:15:03.238051 19.42 npm error
2026-Feb-09 09:15:03.238051 19.42 npm error aliases: clean-install, ic, install-clean, isntall-clean
2026-Feb-09 09:15:03.238051 19.42 npm error
2026-Feb-09 09:15:03.238051 19.42 npm error Run "npm help ci" for more info
2026-Feb-09 09:15:03.238051 19.42 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-02-09T09_14_43_963Z-debug-0.log
2026-Feb-09 09:15:03.238051 ------
2026-Feb-09 09:15:03.238051 
2026-Feb-09 09:15:03.238051 1 warning found (use docker --debug to expand):
2026-Feb-09 09:15:03.238051 - UndefinedVar: Usage of undefined variable '$NIXPACKS_PATH' (line 18)
2026-Feb-09 09:15:03.238051 Dockerfile:20
2026-Feb-09 09:15:03.238051 --------------------
2026-Feb-09 09:15:03.238051 18 |     ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
2026-Feb-09 09:15:03.238051 19 |     COPY . /app/.
2026-Feb-09 09:15:03.238051 20 | >>> RUN --mount=type=cache,id=scwc8ogkwo084s4okw0kgooc-/root/npm,target=/root/.npm npm ci
2026-Feb-09 09:15:03.238051 21 |
2026-Feb-09 09:15:03.238051 22 |     # build phase
2026-Feb-09 09:15:03.238051 --------------------
2026-Feb-09 09:15:03.238051 ERROR: failed to build: failed to solve: process "/bin/bash -ol pipefail -c npm ci" did not complete successfully: exit code: 1
2026-Feb-09 09:15:03.238051 exit status 1
2026-Feb-09 09:15:03.281924 [DEBUG] Error type: RuntimeException
2026-Feb-09 09:15:03.321009 [DEBUG] Error code: 0
2026-Feb-09 09:15:03.362550 [DEBUG] Location: /var/www/html/app/Traits/ExecuteRemoteCommand.php:243
2026-Feb-09 09:15:03.400426 [DEBUG] Stack trace (first 5 lines):
2026-Feb-09 09:15:03.445013 [DEBUG] #0 /var/www/html/app/Traits/ExecuteRemoteCommand.php(104): App\Jobs\ApplicationDeploymentJob->executeCommandWithProcess()
2026-Feb-09 09:15:03.480980 [DEBUG] #1 /var/www/html/vendor/laravel/framework/src/Illuminate/Collections/Traits/EnumeratesValues.php(271): App\Jobs\ApplicationDeploymentJob->{closure:App\Traits\ExecuteRemoteCommand::execute_remote_command():71}()
2026-Feb-09 09:15:03.511547 [DEBUG] #2 /var/www/html/app/Traits/ExecuteRemoteCommand.php(71): Illuminate\Support\Collection->each()
2026-Feb-09 09:15:03.545261 [DEBUG] #3 /var/www/html/app/Jobs/ApplicationDeploymentJob.php(3118): App\Jobs\ApplicationDeploymentJob->execute_remote_command()
2026-Feb-09 09:15:03.581928 [DEBUG] #4 /var/www/html/app/Jobs/ApplicationDeploymentJob.php(888): App\Jobs\ApplicationDeploymentJob->build_image()
2026-Feb-09 09:15:03.618890 ========================================
2026-Feb-09 09:15:03.649459 Deployment failed. Removing the new version of your application.
2026-Feb-09 09:15:07.359130 Gracefully shutting down build container: fwc04csg8wo884owoscwgcks
2026-Feb-09 09:15:08.053660 [DEBUG] [CMD]: docker stop -t 30 fwc04csg8wo884owoscwgcks
2026-Feb-09 09:15:08.053660 [DEBUG] fwc04csg8wo884owoscwgcks