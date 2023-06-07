import PropTypes from 'prop-types';
export default function PackagingList() {
    function Item({ name, isPacked }) {
        // if (isPacked){
        //     return <li className="item">{name} ✔</li>;
        //     // return null;
        // }else{
        //     return <li className="item">{name}</li>;
        // }
        // return <li className="item">{ isPacked ? name + " ✔" : name }</li>;
        return <li className="item"> {name} { isPacked && " ✔" }</li>;
    }
    return (
        <>
            <section>
                <h1>Sally Ride&apos;s Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Tam"
                    />
                </ul>
            </section>
        </>
    )
}
PackagingList.propTypes = {
    name: PropTypes.string.isRequired,
    isPacked: PropTypes.bool.isRequired
}