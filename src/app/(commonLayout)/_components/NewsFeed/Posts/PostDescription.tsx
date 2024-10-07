

const PostDescription = ({description, title}:{description:string, title:string}) => {
    return (
       <div>
        <h1 className="font-semibold text-primary-10">{title ? title : ""}</h1>
         <p className="text-sm text-primary-10/80 font-Lato mt-2" dangerouslySetInnerHTML={{ __html: description
        }}/>
        </div>
    );
};

export default PostDescription;