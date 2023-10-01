import path from "path";
import childProcess from "child_process";

const compileTokens = () => {
  const tokensDir = path.resolve(__dirname, "../src/styles/tokens");

  childProcess.exec(`sass ${tokensDir}:${tokensDir}`);
};

export default compileTokens;
