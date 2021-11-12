import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'wel',
    pathMatch: 'full'
  },
  {
    path: 'rm1',
    loadChildren: () => import('./rm1/rm1.module').then( m => m.Rm1PageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'ch1',
    loadChildren: () => import('./ch1/ch1.module').then( m => m.Ch1PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'eleceed',
    loadChildren: () => import('./eleceed/eleceed.module').then( m => m.EleceedPageModule)
  },
  {
    path: 'silver',
    loadChildren: () => import('./silver/silver.module').then( m => m.SilverPageModule)
  },
  {
    path: 'sdap',
    loadChildren: () => import('./sdap/sdap.module').then( m => m.SdapPageModule)
  },
  {
    path: 'tbate',
    loadChildren: () => import('./tbate/tbate.module').then( m => m.TbatePageModule)
  },
  {
    path: 'solo',
    loadChildren: () => import('./solo/solo.module').then( m => m.SoloPageModule)
  },
  {
    path: 'truedu',
    loadChildren: () => import('./truedu/truedu.module').then( m => m.TrueduPageModule)
  },
  {
    path: 'lady',
    loadChildren: () => import('./lady/lady.module').then( m => m.LadyPageModule)
  },
  {
    path: 'sdapch1',
    loadChildren: () => import('./sdapch1/sdapch1.module').then( m => m.Sdapch1PageModule)
  },
  {
    path: 'sdapch2',
    loadChildren: () => import('./sdapch2/sdapch2.module').then( m => m.Sdapch2PageModule)
  },
  {
    path: 'genre1',
    loadChildren: () => import('./genre1/genre1.module').then( m => m.Genre1PageModule)
  },
  {
    path: 'crown',
    loadChildren: () => import('./crown/crown.module').then( m => m.CrownPageModule)
  },
  {
    path: 'novel',
    loadChildren: () => import('./novel/novel.module').then( m => m.NovelPageModule)
  },
  {
    path: 'genre2',
    loadChildren: () => import('./genre2/genre2.module').then( m => m.Genre2PageModule)
  },
  {
    path: 'portrait',
    loadChildren: () => import('./portrait/portrait.module').then( m => m.PortraitPageModule)
  },
  {
    path: 'dark',
    loadChildren: () => import('./dark/dark.module').then( m => m.DarkPageModule)
  },
  {
    path: 'lake',
    loadChildren: () => import('./lake/lake.module').then( m => m.LakePageModule)
  },
  {
    path: 'the',
    loadChildren: () => import('./the/the.module').then( m => m.ThePageModule)
  },
  {
    path: 'genre3',
    loadChildren: () => import('./genre3/genre3.module').then( m => m.Genre3PageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'genre4',
    loadChildren: () => import('./genre4/genre4.module').then( m => m.Genre4PageModule)
  },
  {
    path: 'wel',
    loadChildren: () => import('./wel/wel.module').then( m => m.WelPageModule)
  },
  {
    path: 'genre',
    loadChildren: () => import('./genre/genre.module').then( m => m.GenrePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'reco',
    loadChildren: () => import('./reco/reco.module').then( m => m.RecoPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'rm',
    loadChildren: () => import('./rm/rm.module').then( m => m.RmPageModule)
  },
  {
    path: 'cro1',
    loadChildren: () => import('./cro1/cro1.module').then( m => m.Cro1PageModule)
  },
  {
    path: 'dark1',
    loadChildren: () => import('./dark1/dark1.module').then( m => m.Dark1PageModule)
  },
  {
    path: 'tbate1',
    loadChildren: () => import('./tbate1/tbate1.module').then( m => m.Tbate1PageModule)
  },
  {
    path: 'eleceed1',
    loadChildren: () => import('./eleceed1/eleceed1.module').then( m => m.Eleceed1PageModule)
  },
  {
    path: 'solo1',
    loadChildren: () => import('./solo1/solo1.module').then( m => m.Solo1PageModule)
  },
  {
    path: 'truedu1',
    loadChildren: () => import('./truedu1/truedu1.module').then( m => m.Truedu1PageModule)
  },
  {
    path: 'the1',
    loadChildren: () => import('./the1/the1.module').then( m => m.The1PageModule)
  },
  {
    path: 'lady1',
    loadChildren: () => import('./lady1/lady1.module').then( m => m.Lady1PageModule)
  },
  {
    path: 'inso',
    loadChildren: () => import('./inso/inso.module').then( m => m.InsoPageModule)
  },
  {
    path: 'fight',
    loadChildren: () => import('./fight/fight.module').then( m => m.FightPageModule)
  },
  {
    path: 'bunny',
    loadChildren: () => import('./bunny/bunny.module').then( m => m.BunnyPageModule)
  },
  {
    path: 'mec',
    loadChildren: () => import('./mec/mec.module').then( m => m.MecPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
