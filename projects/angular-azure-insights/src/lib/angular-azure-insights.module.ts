import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { IConfiguration } from '@microsoft/applicationinsights-web';
import { AngularAzureInsightsService } from 'angular-azure-insights';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class AngularAzureInsightsModule {
  public static forRoot(
    serviceConfig: IConfiguration
  ): ModuleWithProviders<AngularAzureInsightsModule> {
    // TODO add init values for service.
    return {
      ngModule: AngularAzureInsightsModule,
      providers: [
        AngularAzureInsightsService,
        { provide: 'APP_INSIGHTS_CONFIG', useValue: serviceConfig },
      ],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule?: AngularAzureInsightsModule
  ) {
    if (parentModule) {
      throw new Error(
        'Angular Azure Insights module is already loaded. Import it in the AppModule only'
      );
    }
  }
}
