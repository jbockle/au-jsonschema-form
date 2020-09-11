import * as monaco from 'monaco-editor';
import { bindable, inject, bindingMode, noView, DOM } from 'aurelia-framework';

@inject(Element)
@noView()
export class MonacoEditor {
  private _editor?: monaco.editor.IStandaloneCodeEditor;

  public constructor(private _element: HTMLElement) { }

  @bindable
  public language?: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value?: string;

  @bindable
  public readonly?: boolean;

  @bindable
  public options?: monaco.editor.IStandaloneEditorConstructionOptions;

  public get editor(): monaco.editor.IStandaloneCodeEditor | undefined {
    return this._editor;
  }

  public set editor(value: monaco.editor.IStandaloneCodeEditor | undefined) {
    this._editor?.dispose();
    this._editor = value;
  }

  public attached(): void {
    this.editor = monaco.editor.create(this._element,
      Object.assign(<monaco.editor.IStandaloneEditorConstructionOptions>{
        language: this.language,
        value: this.value ?? '',
        minimap: { enabled: false, maxColumn: 0 },
        readOnly: this.readonly,
      }, this.options ?? {}));

    DOM.addEventListener('resize', () => this.editor?.layout(), false);

    this.editor.onDidChangeModelContent(this.onDidChangeModelContent.bind(this));
  }

  public valueChanged(newValue?: string): void {
    if (this.editor && newValue && newValue !== this.editor.getValue()) {
      this.editor.setValue(newValue);
    }
  }

  public detached(): void {
    this.editor = undefined;
  }

  private onDidChangeModelContent(_event: monaco.editor.IModelContentChangedEvent): void {
    const value = this.editor?.getValue() ?? '';

    if (this.language === 'json') {
      JSON.parse(value);
    }

    this.value = value;
  }
}
