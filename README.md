Kenya E-Services Hub
Project Status and Metadata
| Attribute | Value |
|---|---|
| Codebase Version | 1.0.0 (Stable) |
| Primary Authors | Emmanuel Muathe & Ali Abdilzirk |
| License | Apache License 2.0 |
| Live Deployment | https://emmanuelmuathe.github.io/ |
| Target Environment | Static Web Hosting (GitHub Pages, Netlify, AWS S3) |
🎯 Project Thesis and Technical Rationale
The Kenya Integrated Digital Services Hub serves as a high-availability, zero-latency digital front-door for essential Kenyan public and private services. The core technical rationale driving this repository is the complete avoidance of server-side dependencies, external API calls for core functionality, and heavy third-party JavaScript frameworks.
This Static Application Architecture ensures maximal uptime, minimal hosting cost, and superior performance for users operating under variable network conditions (a critical requirement for digital services accessibility). All filtering and navigation logic is executed client-side, making the entire repository instantly deployable and highly resilient.
Key Architectural Features
 * Single-File Deployment Model: The project is engineered around a single index.html file, which encapsulates all structural HTML, visual CSS, and interaction logic (JavaScript). This ensures atomic deployment and eliminates pathing errors common in multi-file static sites.
 * CSS Variable Design System: A standardized palette is defined using CSS Custom Properties (:root), ensuring rapid theme adjustments and maintaining visual consistency across the mobile-first layout.
 * Client-Side Indexing and Search: The filtering mechanism operates directly against content embedded in data-tags attributes within the service cards. This performs fast, browser-native text searching without requiring an external search index or database.
⚙️ Development Environment Setup
This project requires only a Git client for cloning and a modern web browser for execution. No Node.js, package managers (npm/Yarn), or build steps are necessary.
1. Cloning the Repository
To obtain a local copy of the source code, use the following standard Git command:
git clone [https://github.com/emmanuelmuathe/emmanuelmuathe.github.io.git](https://github.com/emmanuelmuathe/emmanuelmuathe.github.io.git)
cd emmanuelmuathe.github.io

2. Local Execution
To view the application and begin development:
 * Navigate to the root directory of the cloned repository.
 * Open the main file in any web browser:
   # Example command for Linux/macOS
open index.html 

# Example command for Windows
start index.html

The browser will render the application immediately. All functionality, including the JavaScript-powered search and filtering, will be active.
👨‍💻 Contribution Guidelines
We welcome contributions to maintain the accuracy of service links, enhance UI/UX, and expand the directory of resources. All contributions must adhere to the Apache License 2.0 terms.
Code Style and Conventions
 * HTML/CSS/JS Separation (Self-Contained Model): All development must be contained within the index.html file. Maintain existing practices of placing CSS inside <style> and JavaScript inside a single <script> block near the closing </body> tag.
 * Service Card Attributes: When adding a new service link (<a class="card">), ensure the following attributes are populated for full functionality:
   * href: The direct, official URL (must be target="_blank" rel="noopener").
   * data-tags: A space-separated list of relevant keywords for client-side search (e.g., "finance mpesa safaricom payments").
 * Variable Usage: Utilize the predefined CSS custom properties (e.g., var(--primary), var(--dark)) to maintain design system consistency.
Standard Contribution Workflow
Please follow this structured approach for all submissions:
 * Fork the repository to your GitHub account.
 * Clone your fork locally.
 * Create a new feature branch based on main. Use clear, conventional naming (e.g., feat/add-new-service or fix/update-kra-link):
   git checkout -b fix/update-nhif-url main

 * Implement your changes (e.g., update a broken link, add a new card).
 * Commit your changes with a descriptive, atomic message:
   git commit -m "Fix(NHIF): Updated National Health Insurance Fund URL to latest domain."

 * Push your feature branch to your personal fork:
   git push origin fix/update-nhif-url

 * Open a Pull Request (PR) from your branch to the original repository's main branch. Provide a brief summary of the changes and why they were necessary.
📜 License
This project is licensed under the Apache License, Version 2.0. You may obtain a copy of the License at:
> http://www.apache.org/licenses/LICENSE-2.0
> 
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
⚠️ Important Disclaimer
This is a community-driven, non-official resource. This platform is an index of public resources only. We maintain no affiliation with, nor endorse the services provided by, any of the government, NGO, or private entities linked herein. We are not responsible for the content, privacy policies, or operational status of external sites.
