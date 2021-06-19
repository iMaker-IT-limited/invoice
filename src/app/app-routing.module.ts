import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // {
  //   path: "firebase/home",
  //   loadChildren: "./categories/categories.module#CategoriesPageModule"
  // },
  // { path: "", redirectTo: "/firebase/user-profile", pathMatch: "full" },
  { path: "", redirectTo: "/app/auth/signup", pathMatch: "full" },
  {
    path: "contact-us",
    loadChildren: "./pages/contact-us/contact-us.module#ContactUsPageModule"
  },
  {
    path: "about-us",
    loadChildren: "./pages/about-us/about-us.module#AboutUsPageModule"
  },
  {
    path: "join-us",
    loadChildren: "./pages/join-us/join-us.module#JoinUsPageModule"
  },
  {
    path: "about-us-submenu1",
    loadChildren:
      "./pages/about-us-submenu1/about-us-submenu1.module#AboutUsSubmenu1PageModule"
  },
  {
    path: "about-us-submenu2",
    loadChildren:
      "./pages/about-us-submenu2/about-us-submenu2.module#AboutUsSubmenu2PageModule"
  },
  {
    path: "about-us-submenu3",
    loadChildren:
      "./pages/about-us-submenu3/about-us-submenu3.module#AboutUsSubmenu3PageModule"
  },
  {
    path: "contact-us-submenu1",
    loadChildren:
      "./pages/contact-us-submenu1/contact-us-submenu1.module#ContactUsSubmenu1PageModule"
  },
  {
    path: "submenu2",
    loadChildren: "./pages/submenu2/submenu2.module#Submenu2PageModule"
  },
  {
    path: "contact-us-submenu2",
    loadChildren:
      "./pages/contact-us-submenu2/contact-us-submenu2.module#ContactUsSubmenu2PageModule"
  },
  {
    path: "contact-us-submenu3",
    loadChildren:
      "./pages/contact-us-submenu3/contact-us-submenu3.module#ContactUsSubmenu3PageModule"
  },
  {
    path: "walkthrough",
    loadChildren: () =>
      import("./walkthrough/walkthrough.module").then(
        m => m.WalkthroughPageModule
      )
  },
  // {
  //   path: "getting-started",
  //   loadChildren: () =>
  //     import("./getting-started/getting-started.module").then(
  //       m => m.GettingStartedPageModule
  //     )
  // },
  {
    path: "auth/login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "auth/signup",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupPageModule)
  },
  {
    path: "auth/forgot-password",
    loadChildren: () =>
      import("./forgot-password/forgot-password.module").then(
        m => m.ForgotPasswordPageModule
      )
  },
  {
    path: "app",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "contact-card",
    loadChildren: () =>
      import("./contact-card/contact-card.module").then(
        m => m.ContactCardPageModule
      )
  },
  // tslint:disable-next-line:max-line-length
  {
    path: "forms-and-validations",
    loadChildren: () =>
      import("./forms/validations/forms-validations.module").then(
        m => m.FormsValidationsPageModule
      )
  },
  {
    path: "forms-filters",
    loadChildren: () =>
      import("./forms/filters/forms-filters.module").then(
        m => m.FormsFiltersPageModule
      )
  },
  {
    path: "page-not-found",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        m => m.PageNotFoundModule
      )
  },
  {
    path: "showcase",
    loadChildren: () =>
      import("./showcase/showcase.module").then(m => m.ShowcasePageModule)
  },
  {
    // "firebase"
    path: "firebase",
    loadChildren: () =>
      import("./firebase/firebase-integration.module").then(
        m => m.FirebaseIntegrationModule
      )
  },
  {
    path: "maps",
    loadChildren: () => import("./maps/maps.module").then(m => m.MapsPageModule)
  },
  { path: "**", redirectTo: "page-not-found" },
  { path: "form", loadChildren: "./alerts/form/form.module#FormPageModule" },
  {
    path: "join-us-submenu1",
    loadChildren:
      "./pages/join-us-submenu1/join-us-submenu1.module#JoinUsSubmenu1PageModule"
  },
  {
    path: "join-us-submenu2",
    loadChildren:
      "./pages/join-us-submenu2/join-us-submenu2.module#JoinUsSubmenu2PageModule"
  },
  {
    path: "submenu3",
    loadChildren: "./pages/submenu3/submenu3.module#Submenu3PageModule"
  },
  // { path: 'create', loadChildren: './firebase/expenses/create/create.module#CreatePageModule' },
  // { path: 'update', loadChildren: './firebase/expenses/update/update.module#UpdatePageModule' },
  // { path: 'details', loadChildren: './firebase/expenses/details/details.module#DetailsPageModule' },
  // { path: 'expenses', loadChildren: './firebase/expenses/expenses/expenses.module#ExpensesPageModule' },
  // { path: 'company-profile', loadChildren: './firebase/company_profile/company-profile/company-profile.module#CompanyProfilePageModule' },
  // { path: 'update', loadChildren: './firebase/company_profile/update/update.module#UpdatePageModule' },
  // { path: 'create', loadChildren: './firebase/creditnotes/create/create.module#CreatePageModule' },
  // { path: 'details', loadChildren: './firebase/creditnotes/details/details.module#DetailsPageModule' },
  // { path: 'creditnotes', loadChildren: './firebase/creditnotes/creditnotes/creditnotes.module#CreditnotesPageModule' },
  // { path: 'update', loadChildren: './firebase/creditnotes/update/update.module#UpdatePageModule' },
  // { path: 'create', loadChildren: './firebase/paymentsrec/create/create.module#CreatePageModule' },
  // { path: 'paymentsrec', loadChildren: './firebase/paymentsrec/paymentsrec/paymentsrec.module#PaymentsrecPageModule' },
  // { path: 'details', loadChildren: './firebase/paymentsrec/details/details.module#DetailsPageModule' },
  // { path: 'update', loadChildren: './firebase/paymentsrec/update/update.module#UpdatePageModule' },
  // {
  //   path: "form-results",
  //   loadChildren:
  //     "./alerts/form-results/form-results.module#FormResultsPageModule"
  // }
  // { path: 'form-alert', loadChildren: './alerts/form-alert/form-alert.module#FormAlertPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
