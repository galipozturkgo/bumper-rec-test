import ArnoldClark from 'images/ArnoldClark.jpg';

const SubInfo = () => {
  return <div className="">
    <div className="h-[740px] max-h-[740px]">
      <div className="relative h-full w-full bg-top bg-no-repeat bg-cover" style={{ backgroundImage: `url(${ArnoldClark})` }}>
        <div className="absolute lg:right-72 top-[80%] lg:top-[50%] -translate-y-[50%]">
          <div className="flex flex-col w-[400px] bg-brandReverse p-6 rounded-[16px]">
            <span className="font-bold">“Est sem nisl morbi praesent tempor augue in venenatis dolor massa viverra parturient at ligula.</span>
            <span className="tracking-wider">Ad magnis in justo lobortis vestibulum a adipiscing nisl magnis sociosqu faucibus parturient aenean a metus sem quam adipiscing ut eget ullamcorper pulvinar pharetra cursus consectetur ante. Senectus primis scelerisque a vestibulum vestibulum consectetur inceptos pharetra. Suspendisse ultrices porta.”</span>
            <div className="flex flex-row items-center pt-4 space-x-4">
              <div>
                <div className="flex flex-col">
                  <span className="font-semibold">Eddie Hawthorne</span>
                  <span>Managing Director</span>
                </div>
              </div>
              <div className="h-12 w-[2px] bg-brandContrast" />
              <div className="flex flex-col items-center font-black text-2xl italic">
                <span>Arnold</span>
                <span>Clark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-[200px] bg-brandPrimary" />
  </div>
}

export default SubInfo
