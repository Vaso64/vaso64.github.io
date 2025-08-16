namespace Portfolio.Model;

[Serializable]
public record Media
{
    public string Type { get; set; }

    public string Src { get; set; }
    public string Thumbnail { get; set; }
}