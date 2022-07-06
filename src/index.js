import "./index.scss";

if (process.env.NODE_ENV === "production") {
  console.log("Mode production");
} else if (process.env.NODE_ENV === "development") {
  console.log("Mode développement");
}
