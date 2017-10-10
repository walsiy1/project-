db.sandy.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			"actor.twitterTimeZone":"Eastern Time (US & Canada)"
			}
		},

		// Stage 2
		{
			$group: {
			_id:"$actor.displayName",
			followersCount:{$sum:"$followersCount"}
			}
		},
	],

	// Options
	{
		cursor: {
			batchSize: 50
		}
	}

	

);
