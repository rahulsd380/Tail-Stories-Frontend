const PostDescription = ({
    description,
    title,
    isVerified,
    contentType,
  }: {
    description: string;
    title: string;
    isVerified: boolean;
    contentType: string;
  }) => {
    return (
      <div>
        <h1 className="font-semibold text-primary-10">{title ? title : ""}</h1>
        {(!isVerified && contentType === "premium") ? (
          <div className="blur-sm relative">
            <p
              className="text-sm text-primary-10/80 font-Lato mt-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <button className="absolute top-5 text-white">
                Go premium
            </button>
          </div>
        ) : (
          <p
            className="text-sm text-primary-10/80 font-Lato mt-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    );
  };
  
  export default PostDescription;
  