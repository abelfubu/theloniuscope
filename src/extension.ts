// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "theloniuscope" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'theloniuscope.helloWorld',
    async () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      const a = await vscode.window.showQuickPick([
        { label: 'Hello World from theloniuscope!' },
        { label: 'Hello World from theloniuscope!' },
      ]);
      vscode.window.showInformationMessage(String(a?.label));
      const diagnostics = vscode.languages.getDiagnostics();
      const chosen = await vscode.window.showQuickPick(
        diagnostics.reduce<{ label: string }[]>((acc, [file, d]) => {
          const labels = d.map(({ message, range }) => ({
            label: message,
            range,
          }));
          return acc.concat(labels);
        }, []),
        {
          title: 'Choose a file to open',
        }
      );

      if (chosen) {
        const c = vscode.workspace.openTextDocument(diagnostics[2][0]);
        vscode.window.showTextDocument(diagnostics[2][0], {
          selection: {},
        });
        vscode;
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
