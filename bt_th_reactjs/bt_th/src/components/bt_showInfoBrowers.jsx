export default function ShowInfoBrower() {
  let navigator = window.navigator;
  return <h4>Browser's details: {navigator.userAgent}</h4>;
}
