from pathlib import Path
import shutil
import sys


def main() -> int:
    project_root = Path(__file__).resolve().parent

    source = project_root.parent / "vx-components" / "dist" / "standalone" / "vx-ghdocs.js"
    destination = project_root / "custom_theme" / "js" / "vx-ghdocs.js"

    print("Copying -")
    print(f"  From: {source}")
    print(f"    To: {destination}")

    if not source.is_file():
        print(f"Source file not found: {source}", file=sys.stderr)
        return 1

    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, destination)

    print(f"Copied {source} -> {destination}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())