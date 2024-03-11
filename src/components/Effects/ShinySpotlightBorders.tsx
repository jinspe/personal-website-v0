import ContainerSpotlight from "./ContainerSpotlight";

/**
 * card borders looks shiny or normal depending on the mouse proximity
 */
export default function ShinySpotlightBorders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerSpotlight className="group">
      <div
        className="group relative h-full overflow-hidden 
          rounded-lg bg-transparent p-px 
          transition-all
          duration-700 
          before:pointer-events-none 
          before:absolute 
          before:-left-40 
          before:-top-40 
          before:z-10 before:h-80 
          before:w-80 
          before:translate-x-[var(--mouse-x)] 
          before:translate-y-[var(--mouse-y)] before:rounded-full 
          before:bg-slate-100 before:opacity-0 before:blur-[100px] 
          before:transition-opacity before:duration-500 
          hover:shadow-lg 
          before:group-hover:opacity-100 "
      >
        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-black">
          {/*  <div
              className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
              aria-hidden="true"
            >
              <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-900 blur-[80px]"></div>
            </div> */}
          {children}
        </div>
      </div>
    </ContainerSpotlight>
  );
}
