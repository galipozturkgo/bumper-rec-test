import Nav from "./Nav"

const LeftNavs = () => {
  return <div className="h-full py-1 lg:py-0 border-b-[1px] border-brandContrast lg:border-none lg:flex">
    <Nav to="apply" text="Apply" />
    <Nav to="how-it-works" text="How it works" />
    <Nav to="about-us" text="About us" />
    <Nav to="blog" text="Blog" />
  </div>
}

export default LeftNavs
