import clsx from "clsx";

export function Divider({ className, ...props }){
  return (
    <div className={clsx(
        className, 
        'w-full h-[1px] bg-gray-300'
      )}
      {...props} 
    />
  )
}