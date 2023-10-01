import { AppNavBar, InstalledModsSection, ModFileSection } from "widgets/ui";

import css from "./App.module.scss";

const App = () => (
  <div className={css.App} data-testid="App">
    <aside>
      <AppNavBar />
    </aside>
    <main>
      <InstalledModsSection />
      <ModFileSection />
    </main>
  </div>
);

export { App };
