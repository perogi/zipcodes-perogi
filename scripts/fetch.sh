#!/bin/bash

set -e

cd "$(dirname "$0")"

wait

echo "Processing CSV file."

./process.js

wait

echo "Build Complete"
