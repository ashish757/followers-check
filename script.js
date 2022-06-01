const getWasteFollowing = (following, followers) => {
    let wasteFollowing = []
    following.forEach(follow => {
        
        let isAlsoFollower = false
        
        followers.forEach(follower => {
            if (follow == follower) {
                isAlsoFollower  = true
                
            }
        })

        if (!isAlsoFollower) {

            wasteFollowing.push(follow)
        }
        
    })

    return wasteFollowing
    
}
