colors() {
    RED='\033[1;31m'
    YELLOW='\033[1;33m'
    CYAN='\033[1;36m'
    RESET='\033[0m'
}

now() {
    date +%Y-%m-%d" "%H-%M-%S
}

info() (
    colors
    printf "${YELLOW}[INFO][$(now)] $@${RESET}\n"
)

error() (
    colors
    printf "${RED}[ERROR][$(now)] $@${RESET}\n" >&2
)

warn() (
    colors
    printf "${YELLOW}[WARN][$(now)] $@${RESET}\n" >&2
)

header() (
    colors
    printf "${CYAN}$@${RESET}\n"
)

start_color() (
  colors
  # shellcheck disable=SC2046
  echo -e $(printenv "$1")
)

stop_color() (
  colors
  printf "%s" "$RESET"
)
