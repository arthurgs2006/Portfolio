type box = {
    icon: string,
    description: string,
    href: string,
    target: boolean
}

export default function Box({ icon, description, href, target }: box) {
    return (
        <>
            <a className="bg-dark d-flex align-items-center px-3 cardBox
            gap-5 rounded text-decoration-none width-responsive-cardbox" 
                href={href} target={target ? "_blank" : ''}>
                <span className="">
                    <i className={`bi bi-${icon} h1 text-white`}></i>
                </span>
                <span className="text-white ">
                    {description}
                </span>
            </a>
        </>
    )
}
