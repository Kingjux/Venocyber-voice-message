{ pkgs }: {
  repl = {
    source = {
      git = "https://github.com/kingjux/venocyber-voice-message.git";
    };
    dependencies = [
      pkgs.nodejs
      pkgs.yarn
    ];
    devShellPath = "./devshell";
    devShellInputs = {
      inherit (pkgs) nodePackages;
    };
  };
}
