#!/usr/bin/env bash
# you need to source this script to consume $CONCURRENCY
# this script is used to calculate the concurrency based on the number of persistent tasks
# this is needed to prevent the turbo run from failing due to the default concurrency limit of 10 like the following:
# invalid task configuration
# Error:   × You have 21 persistent tasks but `turbo` is configured for concurrency of 10. Set --concurrency to at least 22

# the concurrency is set to the number of persistent tasks + 1

persistent_tasks=$(npx turbo run dev --dry-run=json --parallel | jq '[.tasks[] | select(.resolvedTaskDefinition.persistent == true)] | length')
concurrency=$((persistent_tasks + 1))

echo "persistent tasks: $persistent_tasks"
echo "set concurrency to: $concurrency"

export CONCURRENCY=$concurrency
