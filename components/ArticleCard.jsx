import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { Suspense } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";

function ArticleCard({ data }) {
  const timeAgo = formatDistanceToNow(new Date(data.timestamp), {
    addSuffix: true,
  });

  return (
    <div className="max-w-[400px] w-full">
      <div className="mt-10 w-full">
        <Card className="h-full max-w-[400px] w-full md:w-[400px] flex flex-col justify-between">
          <CardHeader className="flex flex-col w-full">
            <div className="flex justify-between">
              <p className="text-muted-foreground text-xs">{timeAgo}</p>
              <p className="text-muted-foreground text-xs">{data.user}</p>
            </div>
            <div>
              <CardTitle className="leading-2 text-2xl line-clamp-2">
                {data.title}
              </CardTitle>
            </div>
            <div className="text-muted-foreground line-clamp-3 mt-2">
              <p>{data.description}</p>
            </div>
          </CardHeader>
          <div className="">
            <div className="w-full h-[200px] px-5">
              <img
                src="https://static.vecteezy.com/system/resources/previews/015/573/452/original/sunset-landscape-with-bird-silhouettes-free-vector.jpg"
                alt="blog-card"
                className="rounded-md object-cover w-full h-full"
              />
            </div>
            <CardFooter className="w-full flex justify-between mt-4">
              <div className="flex gap-2 items-center">
                <BsFillPersonFill />
                473 views
              </div>
              <div>
                <Button variant="outline">
                  <Link href={`/article/${data.id}`}>Read more &rarr;</Link>
                </Button>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ArticleCard;
