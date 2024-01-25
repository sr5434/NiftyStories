export default function Post({ postData }) {
    return (
        <div className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 max-h-fit">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{postData.User}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{postData.Timestamp}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{postData.Content}</p>
        </div>
    )
  }