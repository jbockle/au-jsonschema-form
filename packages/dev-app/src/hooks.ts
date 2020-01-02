export class JavaScriptConstantsViewEngineHooks {
  public beforeBind(view: any): void {
    for (const global of ['Array', 'Object', 'JSON', 'Date', 'Math', 'Number', 'RegExp', 'Reflect', 'setInterval']) {
      view.overrideContext[global] = window[global as any];
    }
  }
}
