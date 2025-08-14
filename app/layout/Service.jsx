import ServiceCard from "../components/ServiceCard"

const Service = () => {
    return (
        <div className="w-full p-5 bg-[url(/section-bg.svg)] mt-15 bg-cover bg-center flex flex-col justify-center items-center gap-3">
            <div className="flex justify-center item-center gap-3">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <div className="flex justify-center item-center gap-3">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default Service
