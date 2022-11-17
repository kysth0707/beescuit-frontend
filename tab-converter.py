with open("tab-converter-file.txt", encoding="utf-8") as f:
	Contents = f.readlines()
	ConvertedContents = []
	for LineData in Contents:
		ConvertedContents.append(LineData.replace("\t","    ").replace("  ","\t"))
	# for
	# print(ConvertedContents)

	with open("tab-result.txt", mode="w", encoding="utf-8") as f2:
		f2.write("\t".join(ConvertedContents))