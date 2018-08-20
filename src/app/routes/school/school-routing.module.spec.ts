import { SchoolRoutingModule } from './school-routing.module';

describe('SchoolRoutingModule', () => {
  let schoolRoutingModule: SchoolRoutingModule;

  beforeEach(() => {
    schoolRoutingModule = new SchoolRoutingModule();
  });

  it('should create an instance', () => {
    expect(schoolRoutingModule).toBeTruthy();
  });
});
