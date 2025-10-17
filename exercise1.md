# Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.

- ## Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by Google.
  - For Python, the most common tools for linting are flake8, mypy and pylint. For testing, pytest seems to be preferred by most, given his ease of use and friendly ux. Unittest is also popular, being the standard library for testing in Python. For building distributable packages, Python commonly uses setuptools, wheel, and the build module.
- ## What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask Google!
  - Some alternatives to Jenkins and GitHub Actions are GitLab CI, CircleCI, AWS CodePipeline, Azure DevOps, and Travis CI.
- ## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
  - This small setup would be better in a cloud-based environment because it is easier to set up and manage. It is easier to scale up and down and the maintenance is taken care of by the cloud provider. All the team members would have access to the same environment, so they can work on the same codebase without having to worry about compatibility issues.
  - The information I would need to make that decision is the production budget, the cost of the cloud provider, the expected traffic and the scalability of the application.
