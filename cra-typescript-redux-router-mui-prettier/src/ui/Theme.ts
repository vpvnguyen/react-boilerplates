export default class Theme {
  private static privateTheme = () => console.log("private theme");
  public static getTheme = () => console.log("get theme");
}
