#!/usr/bin/env bash

# gets the version from the package.json and appends latest commit hash shortened
echo v$(cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g')-$(git rev-parse --short HEAD)