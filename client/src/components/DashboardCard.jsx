import { Link } from "react-router-dom";

export default function DashboardCard({
    title,
    description,
    color,
    link
}) {

    return (

        <div className="col-md-4 mb-4">

            <div className={`card border-${color} shadow h-100`}>

                <div className="card-body text-center">

                    <h3 className={`text-${color}`}>
                        {title}
                    </h3>

                    <p className="text-muted">
                        {description}
                    </p>

                    <Link
                        to={link}
                        className={`btn btn-${color}`}
                    >
                        Open
                    </Link>

                </div>

            </div>

        </div>

    );

}