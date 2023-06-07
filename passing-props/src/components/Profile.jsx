import Avatar from "./Avatar"
export default function Profile() {
    return (
        <>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
                <Avatar
                    size={80}
                    person={{
                        name: 'Aklilu Lemma',
                        imageId: 'OKS67lh'
                    }}
                />
        </>
    )
}