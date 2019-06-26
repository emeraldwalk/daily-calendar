main() {
  local out_dir="$(dirname $0)"
  local out_file="$out_dir/build/month_$(date +%s).pdf"

  echo rm $out_dir/build/*.pdf
  rm $out_dir/build/*.pdf

  echo node $out_dir "$out_file"
  node $out_dir "$out_file"

  echo osascript -e 'tell application "System Events" to tell every desktop to set picture to "'"$out_file"'"'
  osascript -e 'tell application "System Events" to tell every desktop to set picture to "'"$out_file"'"'
}

main