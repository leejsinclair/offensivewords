#!/bin/bash
echo "ENGLISH"
echo "Get English Swear words"
rm en
wget https://raw.githubusercontent.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/master/en

echo "Convert to uppercase"
dd if=en of=en_uppercase conv=ucase

echo "Join files"
cat en_uppercase en_custom > en_combined

echo "Sort file"
sort -u en_combined > en_sorted

node remove-common-words.js > en_non_common

rm en_uppercase
rm en_combined
rm en_sorted

mv en_non_common en
