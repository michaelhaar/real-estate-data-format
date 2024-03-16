# Contributing

If you have any ideas for improvements or new features, feel free to open an issue or a pull request.

## Development

- Create new branch.
- Make changes.
- IMPORTANT: Update the version.
  - e.g. `npm run version:update 1.0.0`
    - should update the version in `package.json` & `schema.json`.
    - should also generate the `real-estate-listing.d.ts` file and run prettier
  - follow the [Semantic Versioning](https://semver.org/) standard => `MAJOR.MINOR.PATCH`
    - `MAJOR` version when you make incompatible API changes,
    - `MINOR` version when you add functionality in a backwards compatible manner, and
    - `PATCH` version when you make backwards compatible bug fixes.
- Optionally run some checks locally
  - e.g. `npm run test`
- Commit & push changes
- Open a pull request
- Wait for the pipeline to succeed
- `Squash and Merge` the pull request
  - pipeline should run again and automatically publish the new version to npm and create a new release on GitHub 💪
  - (automatic deployment is only triggered when the version in `package.json` has been updated)
