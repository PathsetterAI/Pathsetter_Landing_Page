#!/usr/bin/env bash
#
# Rasterises the committed SVG sources in public/ into the PNGs that the
# Open Graph tags and the Organization JSON-LD point at.
#
# Uses headless Chrome rather than adding an image toolchain to the repo.
# Run from the repo root after editing either SVG:
#
#   ./scripts/render-brand-assets.sh
#
set -euo pipefail

cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME" >&2
  echo "Set CHROME=/path/to/chrome and re-run." >&2
  exit 1
fi

render() {
  local src="$1" out="$2" w="$3" h="$4"
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 --window-size="${w},${h}" \
    --screenshot="$PWD/$out" "file://$PWD/$src" >/dev/null 2>&1
  echo "  $out  ($(sips -g pixelWidth -g pixelHeight "$out" | tail -2 | tr -d '\n' | tr -s ' '), $(du -h "$out" | cut -f1))"
}

echo "Rendering brand assets:"
render public/og-image.svg public/og-image.png 1200 630
render public/logo.svg     public/logo.png      512  512
echo "Done."
