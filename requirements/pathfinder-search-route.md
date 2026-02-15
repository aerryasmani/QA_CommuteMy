---
id: PF-003
title: Pathfinder Search Route
priority: high
---

# Feature: Pathfinder Search Route

A user selects origin and destination stations. The app presents a "Search Route" button. When both origin and destination are valid, the button becomes enabled. Clicking it navigates to a results view that shows route options with departure times.

## Acceptance Criteria

- Given no stations are selected, the "Search Route" button is disabled.
- Given only one station is selected, the "Search Route" button is disabled.
- Given both origin and destination are selected, the "Search Route" button is enabled.
- When the user clicks the enabled "Search Route" button, the page navigates to a results view that contains the text "Back To Search" and "Departure Time".
- The destination URL contains `/route/`.

## Scope

Focus on the happy path and basic negative case. Station-typeahead errors and empty selection can be covered in another feature.

## Existing Test Context

- UI elements tested separately (inputs, swap button, placeholder text) in PF-001/PF-002.
- Ensure overlap only for assertions that are unique to the search-button flow.
- See helper PathfinderSearchButton in helpers/homepage.js for pattern. Prefer getByRole, getByPlaceholder over brittle CSS selectors.

## Generated Tests

(Auto-generated tests will be added here once AI generator runs. Expect 2-3 test cases:

1. Default disabled state.
2. Filling both fields enables button.
3. Clicking navigates to results view with expected text.)
