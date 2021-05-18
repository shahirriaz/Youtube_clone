import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard"

function RecommendedVideo() {
    return (
      <div className="recommendedVideos">
        <h4>Recommended</h4>
        <div className="recommendedVideos__videoCard">
          <VideoCard
            title="How to cook pasta"
            views="2.5m Views"
            timeStamp="3 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Shahir Riaz"
            image="https://is2-ssl.mzstatic.com/image/thumb/Purple111/v4/ef/68/79/ef687934-d136-09b4-352a-57ff4abbe1ab/source/256x256bb.jpg"
          />
          <VideoCard
            title="Chicken Recipe"
            views="3.3m Views"
            timeStamp="7 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Aman Riaz"
            image="https://cdn-aiapl.nitrocdn.com/KZJKWDkEwMJCwERIlnRsPNdqobwBIlEo/assets/static/optimized/rev-e0253d2/wp-content/uploads/2014/03/roasted-chicken-recipe-9-copy-256x256.jpg"
          />
          <VideoCard
            title="This is How to Create best Youtube video"
            views="3.3m Views"
            timeStamp="7 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Charlotte Johnsen"
            image="https://louisem.com/wp-content/uploads/2017/06/youtube-thumbnail.jpg"
          />
          <VideoCard
            title="Chicken Recipe"
            views="3.3m Views"
            timeStamp="7 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Aman Riaz"
            image="https://cdn-aiapl.nitrocdn.com/KZJKWDkEwMJCwERIlnRsPNdqobwBIlEo/assets/static/optimized/rev-e0253d2/wp-content/uploads/2014/03/roasted-chicken-recipe-9-copy-256x256.jpg"
          />
          <VideoCard
            title="How to cook pasta"
            views="2.5m Views"
            timeStamp="3 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Shahir Riaz"
            image="https://is2-ssl.mzstatic.com/image/thumb/Purple111/v4/ef/68/79/ef687934-d136-09b4-352a-57ff4abbe1ab/source/256x256bb.jpg"
          />
          <VideoCard
            title="How to cook pasta"
            views="2.5m Views"
            timeStamp="3 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Shahir Riaz"
            image="https://is2-ssl.mzstatic.com/image/thumb/Purple111/v4/ef/68/79/ef687934-d136-09b4-352a-57ff4abbe1ab/source/256x256bb.jpg"
          />
          <VideoCard
            title="This is How to Create best Youtube video"
            views="3.3m Views"
            timeStamp="7 days ago"
            channelImage="https://templatetraining.princeton.edu/sites/training/files/styles/pwds_people_grid/public/media/random_dude.jpg?itok=U5R22pNo"
            channel="Charlotte Johnsen"
            image="https://louisem.com/wp-content/uploads/2017/06/youtube-thumbnail.jpg"
          />
        </div>
      </div>
    );
}

export default RecommendedVideo
